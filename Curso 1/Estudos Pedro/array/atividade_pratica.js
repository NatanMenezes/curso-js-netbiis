let arr = [1, 2, 3, 4, 5, 5, 6];
let contador = 0;

function filtraPares(arr){
    let arrayPares = arr.filter(item => item % 2 == 0);
    console.log('Array somente pares ' + arrayPares);
};

function multiplicaArray(arr, multiplicador){
    arrMulti = arr.map(item => item * multiplicador);
    console.log('Array nova multiplicada ' + arrMulti);
}

function contaOcorrencias(arr, num){
    arrFiltrada = arr.filter(item => item == num);
    console.log("Quantidades de aparição do numero ${num}" + arrFiltrada.length);
}

filtraPares(arr);
multiplicaArray(arr, 3);
contaOcorrencias(arr, 5);