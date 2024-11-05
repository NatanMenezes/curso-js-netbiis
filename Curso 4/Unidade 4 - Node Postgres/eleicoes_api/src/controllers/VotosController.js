import * as votosService from '../services/VotosService.js';
import votoSchema from '../validators/VotosValidator.js';

export async function inserirVoto(req, res) {
    const body = req.body;
    const validarBody = votoSchema.validate(body);
    if (validarBody.error) {
        res.status(400).send({message: validarBody.error.details[0].message});
        return;
    }
    const result = await votosService.inserirVoto(body);
    if (!result) {
        res.status(400).send({message: 'Eleitor já votou'});
        return;
    }
    res.send(result);
}
