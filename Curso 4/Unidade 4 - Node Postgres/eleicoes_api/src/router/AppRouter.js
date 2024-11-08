import { Router } from "express";
import CandidatosRouter from "./CandidatosRouter.js";
import EleicoesRouter from "./EleicoesRouter.js";
import EleitoresRouter from "./EleitoresRouter.js";
import VotosRouter from "./VotosRouter.js";

const router = Router();

router.use('/candidatos', CandidatosRouter);
router.use('/eleicoes', EleicoesRouter);
router.use('/eleitores', EleitoresRouter);
router.use('/votos', VotosRouter);

export default router;