import * as candidatosService from '../services/CandidatosService.js';
import * as candidatosValidator from '../validators/CandidatosValidator.js';
import Joi from 'joi';

export function listarCandidatos(req, res) {
    if (req.query.numero) {
        const candidato = candidatosService.obterCandidatoPorNumero(req.query.numero);
        res.send(candidato);
    }
    const candidatos = candidatosService.listarCandidatos();
    res.send(candidatos);
}

export function obterCandidato(req, res) {
    if (!validarId(req.params.id)) {
        res.status(400).send('Id inválido');
    }
    const candidato = candidatosService.obterCandidato(req.params.id);
    if (!candidato) {
        res.status(404).send('Candidato não encontrado');
    }
    res.send(candidato);
}

export function criarCandidato(req, res) {
    const body = req.body;
    const validarBody = candidatosValidator.candidatoSchema.validate(body);
    if (validarBody.error) {
        res.status(400).send({message: validarBody.error.details[0].message});
        return;
    }
    candidatosService.criarCandidato(body);
    res.status(201).send('Candidato criado com sucesso');
}

export function atualizarCandidato(req, res) {
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
    body.id = req.params.id;
    candidatosService.atualizarCandidato(body);
    res.send('Candidato atualizado com sucesso');
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