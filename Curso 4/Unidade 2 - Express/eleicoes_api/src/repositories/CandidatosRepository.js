import dbConfig from "../config/dbConfig.js";

export function listarCandidatos() {
    return dbConfig.data.candidatos;
}

export function obterCandidato(id) {
    return dbConfig.data.candidatos.find(candidato => candidato.id == id);
}

export function obterCandidatoPorNumero(numero) {
    return dbConfig.data.candidatos.find(candidato => candidato.numero === numero);
}

export function criarCandidato(candidato) {
    dbConfig.data.candidatos.push(candidato);
    dbConfig.write();
}

export function atualizarCandidato(id, candidato) {
    const index = dbConfig.data.candidatos.findIndex(candidato => candidato.id == id);
    dbConfig.data.candidatos[index] = candidato;
    dbConfig.write();
}

export function deletarCandidato(id) {
    const index = dbConfig.data.candidatos.findIndex(candidato => candidato.id == id);
    dbConfig.data.candidatos.splice(index, 1);
    dbConfig.write();
}