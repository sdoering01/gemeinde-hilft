import { Router } from 'express';
import { apiPassword } from '../config';
import { HttpError } from '../util/HttpError';
import {
    validatorMiddleware,
    ValidationSource
} from '../util/validatorMiddleware';
import schema from './schema';

export const passwordMiddleware = Router();

passwordMiddleware.use(
    validatorMiddleware(schema.auth, ValidationSource.HEADER),
    (req, _res, next) => {
        if (apiPassword === req.headers.authorization!.split(' ')[1]) {
            next();
        } else {
            next(
                new HttpError(401, 'Das eingegebene Passwort ist nicht korrekt')
            );
        }
    }
);
