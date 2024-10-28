import AlunosRouter from "./AlunosRouter.js";
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/alunos', AlunosRouter);

export default router;