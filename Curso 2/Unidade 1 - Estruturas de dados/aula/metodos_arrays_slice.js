const arr = [1, 2, 3, 4, 5, 6];

// slice() retorna um novo array a partir de um índice inicial até um índice final
const subArr = arr.slice(1, 4)
console.log(subArr); // Array com os elementos de índice 1 a 3
console.log(arr); // Array original, que não foi alterado pelo slice()

// splice() remove elementos de um array e opcionalmente adiciona novos elementos
const removed = arr.splice(1, 3, 7, 8, 9);
console.log(removed); // Elementos excluídos
console.log(arr); // Elementos restantes