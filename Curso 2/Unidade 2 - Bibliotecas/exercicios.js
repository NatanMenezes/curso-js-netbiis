function substituirPalavra(frase, palavra, novaPalavra) {
    return frase.replace(palavra, novaPalavra);
}

function contarPalavras(frase) {
    return frase.split(' ').length;
}

function extrairIniciais(nome) {
    const partes = nome.split(' ');
    return partes.map(parte => parte[0]).join('.') + '.';
}

function contarVogais(str) {
    const vogais = 'aeiou';
    let contador = 0;
    for (let letra of str) {
        if (vogais.includes(letra.toLowerCase())) {
            contador++;
        }
    }
    return contador;
}