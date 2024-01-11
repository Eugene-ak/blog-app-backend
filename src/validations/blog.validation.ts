import Joi from "joi";

export const blogValidation = Joi.object({
    heading: Joi.string()
        .min(3)
        .required(),
    field: Joi.string()
        .alphanum(),
    content: Joi.string()
        .required(),
    author: Joi.string()
        .min(3)
        .max(15)
        .required(),
    date: Joi.string()
        .required()
})
