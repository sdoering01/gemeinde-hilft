import Joi from 'joi';

export default {
    auth: Joi.object()
        .keys({
            authorization: Joi.string()
                .required()
                .custom((value: string, helpers) => {
                    if (!value.startsWith('Password '))
                        return helpers.error('any.invalid');
                    if (!value.split(' ')[1])
                        return helpers.error('any.invalid');
                    return value;
                }, 'Authorization Header Validation')
        })
        .unknown(true)
};
