import Joi from "joi";

const votoSchema = Joi.object({
    eleitor_id: Joi.number().required(),
    eleicao_id: Joi.number().required(),
    numero: Joi.number().required()
});

export default votoSchema;