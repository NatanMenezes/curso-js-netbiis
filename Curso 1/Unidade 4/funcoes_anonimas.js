// Funções anônimas e expressões de função

// Função anônima: função sem nome
// Expressão de função: função atribuída a uma variável
let anonima = function() {
    console.log('Função anônima');
}
anonima();

// Arrow functions
let arrow = () => {
    console.log('Arrow function');
}
arrow();

let somar = (a, b) => a + b;
let imcCalc = (peso, altura) => (peso / (altura**2)).toFixed(2);

console.log(somar(10, 20)); // 30
console.log(imcCalc(70, 1.75)); // 22.86