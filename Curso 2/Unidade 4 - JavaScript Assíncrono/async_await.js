const promiseAPI = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([
            {id: 1, nome: 'Guilherme'},
            {id: 2, nome: 'Ricardo'}
        ]);
    }, 2000);
});

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            nome: 'Guilherme',
            sobrenome: 'Boulos',
            numeroCampanha: 50
        })
    }, 2000);
});

async function retornarCandidatoCompleto() {
    const listaCandidatos = await promiseAPI;
    const candidato = await promessa;

    const candidatoCompleto = `${listaCandidatos[0].id} - ${candidato.nome} ${candidato.sobrenome} - ${candidato.numeroCampanha}`;
    return candidatoCompleto;
}

retornarCandidatoCompleto().then(res => {
    console.log(res);
});