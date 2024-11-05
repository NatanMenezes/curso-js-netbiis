import * as candidatosRepository from '../repositories/CandidatosRepository.js';

export async function listarCandidatos() {
    const res = await candidatosRepository.listarCandidatos();
    return res;
}

export async function obterCandidato(id) {
    const res = await candidatosRepository.obterCandidato(id);
    return res;
}

export function obterCandidatoPorNumero(numero) {
    return candidatosRepository.obterCandidatoPorNumero(numero);
}

export async function criarCandidato(candidato) {
    const result = await candidatosRepository.adicionarCandidato(candidato);
    return result;
}

export function atualizarCandidato(id, candidato) {
    const result = candidatosRepository.atualizarCandidato(id, candidato);
    return result;
}

export async function deletarCandidato(id) {
    await candidatosRepository.deletarCandidato(id);
}

export function votar(numero) {
    const candidato = candidatosRepository.obterCandidatoPorNumero(numero);
    candidato.votos++;
    candidatosRepository.atualizarCandidato(candidato.id, candidato);
}