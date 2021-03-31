import { RequestHandler } from 'express';
import Joi from 'joi';
import { HttpError } from './HttpError';

export enum ValidationSource {
    BODY = 'body',
    HEADER = 'headers',
    QUERY = 'query',
    PARAM = 'params'
}

type ValidationMiddlewareFunc = (
    schema: Joi.ObjectSchema,
    source?: ValidationSource
) => RequestHandler;

export const validatorMiddleware: ValidationMiddlewareFunc = (
    schema,
    source = ValidationSource.BODY
) => (req, _res, next) => {
    try {
        const { error } = schema.validate(req[source]);

        if (!error) return next();

        const { details } = error;
        const message = details
            .map((i) => i.message.replace(/['"]+/g, ''))
            .join(',');
        next(new HttpError(500, `Fehlerhafte Anfrage: ${message}`));
    } catch (error) {
        next(error);
    }
};
