import Joi from 'joi';

export default {
    helpRequest: Joi.object().keys({
        email: Joi.string().required().max(200).email(),
        name: Joi.string().max(100),
        title: Joi.string().required().max(100),
        description: Joi.string().max(500)
    }),
    helpRequestEdit: Joi.object()
        .keys({
            title: Joi.string().max(100),
            description: Joi.string().max(500)
        })
        .or('title', 'description'),
    helpRequestToken: Joi.object()
        .keys({
            'x-help-token': Joi.string().required()
        })
        .unknown(true),
    helpRequestId: Joi.object().keys({
        id: Joi.string()
            .required()
            .custom((value: string, helpers) => {
                if (!/^[0-9]+$/.test(value))
                    return helpers.error('any.invalid');
                return value;
            }, 'Help request id numeric')
    })
};
