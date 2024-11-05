import * as votosRepository from '../repositories/VotosRepository.js';

export async function inserirVoto(voto) {
    const eleitorVotou = await votosRepository.verificarEleitorVotou(voto.eleicao_id, voto.eleitor_id);
    if (eleitorVotou) {
        return false;
    } else {
        return await votosRepository.inserirVoto(voto);
    }
}