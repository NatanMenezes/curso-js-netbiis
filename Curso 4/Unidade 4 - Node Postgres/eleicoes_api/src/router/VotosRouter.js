import e, { Router } from "express";
import * as VotosController from "../controllers/VotosController.js";

const router = Router();

router
    .post('/', VotosController.inserirVoto);

export default router;