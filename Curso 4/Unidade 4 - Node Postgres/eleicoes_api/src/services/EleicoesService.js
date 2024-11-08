import * as eleicoesRepository from '../repositories/EleicoesRepository.js';
import * as candidatoEleicaoRepository from '../repositories/CandidatoEleicaoRepository.js';
import * as candidatosService from './CandidatosService.js';
import AppError from '../errors/AppError.js';

export async function listarEleicoes() {
    const res = await eleicoesRepository.listarEleicoes();
    return res;
}

export async function obterEleicao(id) {
    const res = await eleicoesRepository.obterEleicao(id);
    return res;
}

export async function resumoEleicao(id) {
    const res = await eleicoesRepository.obterEleicao(id);
    res.votos = await eleicoesRepository.resumoEleicao(id);
    res.votos = res.votos.map(el => {
        return {
            id: el.id,
            nome: el.nome,
            votos: parseInt(el.votos)
        }
    }).sort((a, b) => b.votos - a.votos);
    return res;
}

export async function adicionarCandidatoEleicao(candidatoId, eleicaoId) {
    const referencia = await candidatoEleicaoRepository.buscarReferencia(candidatoId, eleicaoId);
    const candidato = await candidatosService.obterCandidato(candidatoId);
    if (!candidato) {
        throw new AppError("Candidato não encontrado", 404);
    }
    if (referencia) {
        throw new AppError("Candidato já cadastrado na eleição", 400);
    }
    const result = await candidatoEleicaoRepository.adicionarCandidatoEleicao(candidatoId, eleicaoId);
    return result;
}

export async function removerCandidatoEleicao(candidatoId, eleicaoId) {
    return await candidatoEleicaoRepository.removerCandidatoEleicao(candidatoId, eleicaoId);
}

export async function criarEleicao(eleicao) {
    const result = await eleicoesRepository.adicionarEleicao(eleicao);
    return result;
}

export function atualizarEleicao(id, eleicao) {
    const result = eleicoesRepository.atualizarEleicao(id, eleicao);
    return result;
}

export async function deletarEleicao(id) {
    await eleicoesRepository.deletarEleicao(id);
}