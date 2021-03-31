import Joi from 'joi';

export default {
    email: Joi.object().keys({
        email: Joi.string().required().email()
    })
};
