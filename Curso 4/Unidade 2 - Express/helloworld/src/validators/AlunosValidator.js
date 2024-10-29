import Joi from 'joi';

export const AlunosValidator = Joi.object({
    nome: Joi.string().required(),
    dataNascimento: Joi.date().required(),
    email: Joi.string().email().required(),
    notas: Joi.array().items(Joi.number().min(0).max(10))

});