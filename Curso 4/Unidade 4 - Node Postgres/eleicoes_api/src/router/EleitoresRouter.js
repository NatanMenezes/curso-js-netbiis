import { Router } from "express";
import * as EleitoresController from "../controllers/EleitoresController.js";

const router = new Router();

router
    .get('/', EleitoresController.listarEleitores)
    .get('/:id', EleitoresController.obterEleitor)
    .post('/', EleitoresController.criarEleitor)
    .put('/:id', EleitoresController.atualizarEleitor)
    .delete('/:id', EleitoresController.deletarEleitor);

export default router;