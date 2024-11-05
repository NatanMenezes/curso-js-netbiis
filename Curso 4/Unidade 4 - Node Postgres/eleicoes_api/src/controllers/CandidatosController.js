import * as candidatosService from '../services/CandidatosService.js';
import * as candidatosValidator from '../validators/CandidatosValidator.js';
import Joi from 'joi';

export async function listarCandidatos(req, res) {
    if (req.query.numero) {
        const candidato = candidatosService.obterCandidatoPorNumero(req.query.numero);
        res.send(candidato);
    }
    const candidatos = await candidatosService.listarCandidatos();
    res.send(candidatos);
}

export async function obterCandidato(req, res) {
    if (!validarId(req.params.id)) {
        res.status(400).send('Id inválido');
    }
    const candidato = await candidatosService.obterCandidato(req.params.id);
    if (!candidato) {
        res.status(404).send('Candidato não encontrado');
        return;
    }
    res.send(candidato);
}

export async function criarCandidato(req, res) {
    const body = req.body;
    const validarBody = candidatosValidator.candidatoSchema.validate(body);
    if (validarBody.error) {
        res.status(400).send({message: validarBody.error.details[0].message});
        return;
    }
    const result = await candidatosService.criarCandidato(body);
    res.status(201).send(result);
}

export async function atualizarCandidato(req, res) {
    const body = req.body;
    const validarBody = candidatosValidator.candidatoSchema.validate(body);
    if (!validarId(req.params.id)) {
        res.status(400).send({message: 'Id inválido'});
        return;
    }
    if (validarBody.error) {
        res.status(400).send({message: validarBody.error.details[0].message});
        return;
    }
    const result = await candidatosService.atualizarCandidato(req.params.id, body);
    res.send(result);
}

export function deletarCandidato(req, res) {
    if (!validarId(req.params.id)) {
        res.status(400).send('Id inválido');
        return;
    }
    candidatosService.deletarCandidato(req.params.id);
    res.send(`Candidato ${req.params.id} deletado`);
}

function validarId(id) {
    try {
        Joi.assert(id, Joi.number().required());
    } catch (error) {
        return false;
    }
    return true;
}