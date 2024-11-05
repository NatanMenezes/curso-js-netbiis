import Joi from 'joi'

export const candidatoSchema = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().required(),
    partido: Joi.string().required()
})