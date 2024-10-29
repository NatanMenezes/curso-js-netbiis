import { AlunosValidator } from "../validators/AlunosValidator.js";
import * as AlunosService from "../services/AlunosService.js";

export function listarAlunos(req, res) {
    const alunos = AlunosService.listarAlunos();
    res.send(alunos);
}

export function buscarAlunoPorId(req, res) {
    const id = req.params.id;
    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID inválido");
    }

    const aluno = AlunosService.buscarAlunoPorId(id);

    res.send(aluno);
}

export function criarAluno(req, res) {
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    if (validacao.error) {
        res.status(400).send({message: validacao.error.details[0].message});
    }

    AlunosService.criarAluno(body);
    res.status(201).send("Aluno criado");
}

export function atualizarAluno(req, res) {
    const body = req.body;
    const validacao = AlunosValidator.validate(body);
    if (validacao.error) {
        res.status(400).send({message: validacao.error.details[0].message});
    }
    body.id = req.params.id;
    AlunosService.atualizarAluno(body);
    res.send({message: "Aluno "+req.params.id+" atualizado"});
}

export function deletarAluno(req, res) {
    const id = req.params.id;
    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID inválido");
    }
    AlunosService.deletarAluno(id);
    res.send("Aluno deletado");
}