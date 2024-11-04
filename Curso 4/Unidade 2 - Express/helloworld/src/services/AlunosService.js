import * as AlunosRepository from '../repositories/AlunosRepository.js';

export function listarAlunos() {
    return AlunosRepository.listarAlunos();
}

export function buscarAlunoPorId(id) {
    return AlunosRepository.buscarAlunoPorId(id);
}

export function criarAluno(aluno) {
    return AlunosRepository.criarAluno(aluno);
}

export function atualizarAluno(aluno) {
    return AlunosRepository.atualizarAluno(aluno);
}

export function deletarAluno(id) {
    return AlunosRepository.deletarAluno(id);
}