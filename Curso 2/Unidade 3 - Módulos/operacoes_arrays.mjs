export function filtrarPares(array) {
    return array.filter(numero => numero % 2 === 0);
}

export function dobrarValores(array) {
    return array.map(numero => numero * 2);
}

export function somarValores(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

export function calcularMedia(array) {
    return somarValores(array) / array.length;
}