import * as eleitoresRepository from '../repositories/EleitoresRepository.js';

export async function listarEleitores() {
    const res = await eleitoresRepository.listarEleitores();
    return res;
}

export async function obterEleitor(id) {
    const res = await eleitoresRepository.obterEleitor(id);
    return res;
}

export async function criarEleitor(candidato) {
    const result = await eleitoresRepository.criarEleitor(candidato);
    return result;
}

export function atualizarEleitor(id, candidato) {
    const result = eleitoresRepository.atualizarEleitor(id, candidato);
    return result;
}

export async function deletarEleitor(id) {
    await eleitoresRepository.deletarEleitor(id);
}