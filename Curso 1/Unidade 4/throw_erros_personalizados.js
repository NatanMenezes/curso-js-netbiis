function somarValores(valor1, valor2) {
    if(typeof valor1 !== "number" || typeof valor2 !== "number") {
        throw new TypeError("Os valores devem ser números");
    }
    return valor1 + valor2;
}

function dividirValores(valor1, valor2) {
    if(typeof valor1 !== "number" || typeof valor2 !== "number") {
        throw new TypeError("Os valores devem ser números");
    }
    if(valor2 === 0) {
        throw new Error("Não é possível dividir por zero");
    }
    return valor1 / valor2;
}

try {
    console.log(somarValores(10, 20));
    console.log(somarValores("10", 20));
    let teste = dividirValores(10, 0);
    console.log(teste)
} catch(erro) {
    console.error(erro.message);
}

