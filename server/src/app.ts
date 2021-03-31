import express, { Request, Response, NextFunction } from 'express';

import { apiBaseUrl } from './config';
import baseRouter from './routes/baseRouter';
import { HttpError } from './util/HttpError';

export const app = express();

// TODO: Add helmet

app.use(express.json());

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
