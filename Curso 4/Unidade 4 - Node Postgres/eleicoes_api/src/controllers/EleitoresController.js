import * as eleitoresService from '../services/EleitoresService.js';


export async function listarEleitores(req, res) {
    const result = await eleitoresService.listarEleitores();
    res.send(result);
}

export async function obterEleitor(req, res) {
    const result = await eleitoresService.obterEleitor(req.params.id);
    res.send(result);
}

export async function criarEleitor(req, res) {
    const result = await eleitoresService.criarEleitor(req.body);
    res.status(201).send(result);
}

export async function atualizarEleitor(req, res) {
    const result = await eleitoresService.atualizarEleitor(req.params.id, req.body);
    res.send(result);
}

export async function deletarEleitor(req, res) {
    const result = await eleitoresService.deletarEleitor(req.params.id);
    res.send({ message: 'Eleitor deletado com sucesso' });
}
