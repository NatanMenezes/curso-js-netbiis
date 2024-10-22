import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send("Página de alunos");
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    if (parseInt(id) <= 0 || isNaN(parseInt(id))) {
        res.status(400).send("ID inválido");
    }
    const query = req.query;
    console.log(query);

    res.send(`Página do aluno ${id}`);
})

router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.status(201).send("Aluno criado");
})

router.put('/:id', (req, res) => {
    console.log(req.headers);
    res.header("Content-Type", "application/json");
    res.send({message: "Aluno "+req.params.id+" atualizado"});
})

router.delete('/', (req, res) => {
    res.send("Aluno deletado");
})

export default router;