import rateLimit from 'express-rate-limit';
import { RequestHandler } from 'express';

import { environment } from '../config';
import { HttpError } from './HttpError';

const skip = () => environment !== 'production';

const handler: RequestHandler = (req, _res, next) => {
    const waitTime = Math.round(
        (req.rateLimit.resetTime!.getTime() - Date.now()) / 1000
    );
    next(
        new HttpError(
            429,
            `Bitte warte ${waitTime} Sekunden bevor du weitere Anfragen an den Server schickst`
        )
    );
};

export const globalLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 100,
    skip,
    handler
});

export const resendTokensLimiter = rateLimit({
    windowMs: 60 * 60 * 1000,
    max: 3,
    skip,
    handler
});
