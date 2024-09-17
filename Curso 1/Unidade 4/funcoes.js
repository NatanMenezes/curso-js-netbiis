function somar(a, b) {
    return a + b;
}

function calcularIMC(peso, altura) {
    let resultado = peso / (altura**2)
    return resultado.toFixed(2);
}

function mensagemBoasVindas() {
    console.log('----------------------');
    console.log('Bem-vindo ao nosso programa!');
    console.log('----------------------');
}

mensagemBoasVindas();
let somaTeste = somar(10, 20);
let imc = calcularIMC(70, 1.75);
console.log(somaTeste); // 30
console.log(imc); // 22.86