import { Router } from "express";
import CandidatosRouter from "./CandidatosRouter.js";

const router = Router();

router.post('/votar', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Votação feita');
});

router.use('/candidatos', CandidatosRouter);

export default router;