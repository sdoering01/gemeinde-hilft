import Joi from 'joi';

export const numericString = Joi.string()
    .required()
    .custom((value: string, helpers) => {
        if (!/^[0-9]+$/.test(value)) return helpers.error('any.invalid');
        return value;
    }, 'Help request id numeric');
