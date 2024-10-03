let arr = [5, 3, 2, 4, 1, 6];

// sort() modifica o array original, ordenando os elementos
// toSorted() retorna um novo array com os elementos ordenados, sem modificar o array original
let arrayOrdenado = arr.toSorted();
console.log(arrayOrdenado); // Array com os elementos ordenados
console.log(arr); // Array original, que foi alterado pelo sort()
arr.sort();
console.log(arr); // Array com os elementos ordenados
arr.push(4);

// indexOf() retorna o índice do primeiro elemento encontrado no array
let indice = arr.indexOf(4);
console.log(indice); // 3

// lastIndexOf() retorna o índice do último elemento encontrado no array
let ultimoIndice = arr.lastIndexOf(4);
console.log(arr);4
console.log(ultimoIndice); // 6