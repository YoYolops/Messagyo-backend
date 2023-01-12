import Joi from "joi";

export const newUser = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(4).required()
})