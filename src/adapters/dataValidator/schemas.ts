import Joi from "joi";

const Schemas = {
    newUser: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(4).required()
    }),
    login: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().min(4).required(),
    })
}

export default Schemas;