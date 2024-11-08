import * as eleicoesService from '../services/EleicoesService.js';


export async function listarEleicoes(req, res) {
    const result = await eleicoesService.listarEleicoes();
    res.send(result);
}

export async function obterEleicao(req, res) {
    const result = await eleicoesService.obterEleicao(req.params.id);
    res.send(result);
}

export async function resumoEleicao(req, res) {
    const result = await eleicoesService.resumoEleicao(req.params.id);
    res.send(result);
}

export async function adicionarCandidatoEleicao(req, res, next) {
    try {
        const result = await eleicoesService.adicionarCandidatoEleicao(req.body.idCandidato, req.body.idEleicao);
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export async function removerCandidatoEleicao(req, res) {
    await eleicoesService.removerCandidatoEleicao(req.body.idCandidato, req.body.idEleicao);
    res.send({ message: 'Candidato removido da eleição' });
}

export async function criarEleicao(req, res) {
    const result = await eleicoesService.criarEleicao(req.body);
    res.status(201).send(result);
}

export async function atualizarEleicao(req, res) {
    const result = await eleicoesService.atualizarEleicao(req.params.id, req.body);
    res.send(result);
}

export async function deletarEleicao(req, res) {
    const result = await eleicoesService.deletarEleicao(req.params.id);
    res.send({ message: 'Eleição deletada com sucesso' });
}
