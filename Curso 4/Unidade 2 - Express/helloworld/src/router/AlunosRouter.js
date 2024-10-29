import { Router } from "express";
import * as AlunosController from "../controllers/AlunosController.js";

const router = Router();

router
    .get('/', AlunosController.listarAlunos)
    .get('/:id', AlunosController.buscarAlunoPorId)
    .post('/', AlunosController.criarAluno)
    .put('/:id', AlunosController.atualizarAluno)
    .delete('/:id', AlunosController.deletarAluno)

export default router;