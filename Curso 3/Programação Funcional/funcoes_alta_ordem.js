function aplicarOperacao(a, b, operacao) {
    return operacao(a, b);
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

const resultado1 = aplicarOperacao(1, 2, somar);
const resultado2 = aplicarOperacao(1, 2, subtrair);

console.log(resultado1); // 3
console.log(resultado2); // -1