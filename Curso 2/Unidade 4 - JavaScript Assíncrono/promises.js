const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Resolvida');
        // reject('Rejeitada');
    }, 2000);
});

async function executarPromessa() {
    try {
        const resposta = await promessa;
        console.log(resposta);
    }catch(err) {
        console.log(err);
    }
}


promessa.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});