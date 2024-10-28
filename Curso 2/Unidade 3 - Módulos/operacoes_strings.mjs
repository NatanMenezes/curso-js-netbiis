function contarVogais(str) {
    let vogais = 'aeiouAEIOU';
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vogais.includes(str[i])) {
            count++;
        }
    }
    return count;
}

function verificarTamanho(str) {
    return str.length;
}

function inverterString(str) {
    return str.split('').reverse().join('');
}

export { contarVogais, verificarTamanho, inverterString };