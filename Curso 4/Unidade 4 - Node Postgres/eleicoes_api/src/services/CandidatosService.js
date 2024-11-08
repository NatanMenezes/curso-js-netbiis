import * as candidatosRepository from '../repositories/CandidatosRepository.js';

export async function listarCandidatos(eleicaoId = false) {
    if(eleicaoId) {
        const res = await candidatosRepository.listarCandidatosPorEleicao(eleicaoId);
        return res;
    }
    const res = await candidatosRepository.listarCandidatos();
    return res;
}

export async function obterCandidato(id, eleicaoId) {
    const res = await candidatosRepository.obterCandidato(id, eleicaoId);
    return res;
}

export async function obterCandidatoPorNumero(numero, eleicaoId) {
    return await candidatosRepository.obterCandidatoPorNumero(numero, eleicaoId);
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