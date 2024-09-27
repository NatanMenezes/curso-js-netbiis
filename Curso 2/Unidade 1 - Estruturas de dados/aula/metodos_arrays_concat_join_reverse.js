let arr = [1, 2, 3, 4, 5, 6];

// concat() retorna um novo array com os elementos concatenados
let arr2 = arr.concat(7, 8, 9);
console.log(arr2); // Array com os elementos de arr e os novos elementos
console.log(arr); // Array original, que não foi alterado pelo concat()

// join() retorna uma string com os elementos do array separados por um delimitador
let str = arr.join(' - ');
console.log(str); // String com os elementos separados por ' - '

// reverse() modifica o array original, invertendo a ordem dos elementos
// toReversed() retorna um novo array com os elementos invertidos, sem modificar o array original
let arrayReverso = arr.toReversed();
console.log(arrayReverso); // Array com os elementos invertidos
console.log(arr); // Array original, que foi alterado pelo reverse()