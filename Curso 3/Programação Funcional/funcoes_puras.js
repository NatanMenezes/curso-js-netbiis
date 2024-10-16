
// Função pura
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}


// Função impura
let volume = 0;
function aumentarVolume(incremento) {
    volume += incremento;
    return volume;
}

// Testando se as funções são puras
console.log(calcularIMC(80, 1.8) === calcularIMC(80, 1.8)); // 24.69
console.log(aumentarVolume(80) === aumentarVolume(80));