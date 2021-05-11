import Joi from 'joi';

import { numericString } from '../../../util/commonValidators';

export default {
    helpRequest: Joi.object().keys({
        email: Joi.string().required().max(200).email(),
        name: Joi.string().allow('').max(100),
        title: Joi.string().required().max(100),
        description: Joi.string().allow('').max(500)
    }),
    helpRequestContact: Joi.object()
        .keys({
            name: Joi.string().required().max(100),
            email: Joi.string().allow('').max(200).email(),
            phone: Joi.string().allow('').max(20),
            additionalInformation: Joi.string().allow('').max(300)
        })
        .or('email', 'phone'),
    helpRequestEdit: Joi.object()
        .keys({
            title: Joi.string().allow('').max(100),
            description: Joi.string().allow('').max(500)
        })
        .or('title', 'description'),
    helpRequestToken: Joi.object()
        .keys({
            'x-help-token': Joi.string().required()
        })
        .unknown(true),
    helpRequestId: Joi.object().keys({
        id: numericString
    })
};
