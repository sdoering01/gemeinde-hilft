import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import { apiBaseUrl, corsOrigin, trustProxy } from './config';
import baseRouter from './routes/baseRouter';
import { HttpError } from './util/HttpError';
import { globalLimiter } from './util/rateLimiters';

export const app = express();

app.set('trust proxy', trustProxy);

// TODO: Add helmet

app.use(cors({ origin: corsOrigin }));
app.use(express.json());
app.use(globalLimiter);

app.use(`${apiBaseUrl}/`, baseRouter);

app.use((_req, _res, next) => {
    next(new HttpError(404, 'Route nicht gefunden'));
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    let code = 500;
    let message = 'Interner Serverfehler';
    if (err instanceof HttpError) {
        code = err.code;
        message = err.message;
    } else {
        console.log(`Internal Error`);
        console.dir(err);
    }
    res.status(code).send(message);
});
