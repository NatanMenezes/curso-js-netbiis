import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    if (req.query.numero) {
        res.send(`Candidato ${req.query.numero}`);
    }
    res.send('Candidatos');
});

router.get('/:id', (req, res) => {
    res.send(`Candidato ${req.params.id}`);
});

router.post('/', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send('Candidato criado');
});

router.put('/:id', (req, res) => {
    const body = req.body;
    console.log(body);
    res.send(`Candidato ${req.params.id} atualizado`);
});

router.delete('/:id', (req, res) => {
    res.send(`Candidato ${req.params.id} deletado`);
});

export default router;