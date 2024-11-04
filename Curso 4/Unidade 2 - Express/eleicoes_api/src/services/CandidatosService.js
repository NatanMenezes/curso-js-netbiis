import * as candidatosRepository from '../repositories/CandidatosRepository.js';

export function listarCandidatos() {
    return candidatosRepository.listarCandidatos();
}

export function obterCandidato(id) {
    return candidatosRepository.obterCandidato(id);
}

export function obterCandidatoPorNumero(numero) {
    return candidatosRepository.obterCandidatoPorNumero(numero);
}

export function criarCandidato(candidato) {
    candidato.id = Date.now();
    candidatosRepository.criarCandidato(candidato);
}

export function atualizarCandidato(id, candidato) {
    candidatosRepository.atualizarCandidato(id, candidato);
}

export function deletarCandidato(id) {
    candidatosRepository.deletarCandidato(id);
}

export function votar(numero) {
    const candidato = candidatosRepository.obterCandidatoPorNumero(numero);
    candidato.votos++;
    candidatosRepository.atualizarCandidato(candidato.id, candidato);
}