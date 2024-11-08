import { Router } from "express";
import * as EleicoesController from "../controllers/EleicoesController.js";

const router = new Router();

router
    .get('/', EleicoesController.listarEleicoes)
    .get('/:id', EleicoesController.obterEleicao)
    .get('/:id/resumo', EleicoesController.resumoEleicao)
    .post('/novo-candidato', EleicoesController.adicionarCandidatoEleicao)
    .put('/remover-candidato', EleicoesController.removerCandidatoEleicao)
    .post('/', EleicoesController.criarEleicao)
    .put('/:id', EleicoesController.atualizarEleicao)
    .delete('/:id', EleicoesController.deletarEleicao);

export default router;