import Joi from 'joi'

export const candidatoSchema = Joi.object({
    nome: Joi.string().required(),
    numero: Joi.number().required(),
    partido: Joi.string().required(),
    foto: Joi.string().uri().default('https://via.placeholder.com/150'),
    votos: Joi.number().default(0)
})