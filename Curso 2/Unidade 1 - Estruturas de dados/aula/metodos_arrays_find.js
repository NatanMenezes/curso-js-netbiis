const arr = [1, 2, 3, 4, 5];

// find() retorna o primeiro elemento que satisfaça a condição
const maiorQue3 = arr.find((elemento) => elemento > 3);
console.log("Primeiro elemento maior que 3: "+maiorQue3); // 4

// findIndex() retorna o índice do primeiro elemento que satisfaça a condição
const indiceMaiorQue3 = arr.findIndex((elemento) => elemento > 3);
console.log("Indice do primeiro elemento maior que 3: "+indiceMaiorQue3); // 3

// some() retorna true se pelo menos um elemento satisfaz a condição
const temMaiorQue3 = arr.some((elemento) => elemento > 3);
console.log("Tem maiores que 3: "+temMaiorQue3); // true
const temMaiorQue5 = arr.some((elemento) => elemento > 5);
console.log("Tem maiores que 5: "+temMaiorQue5); // false

// every() retorna true se todos os elementos satisfazem a condição
const todosMaiorQue0 = arr.every((elemento) => elemento > 0);
console.log("Todos maiores que 0: "+todosMaiorQue0); // true
const todosMaiorQue3 = arr.every((elemento) => elemento > 3);
console.log("Todos maiores que 3: "+todosMaiorQue3); // false

// includes() retorna true se o elemento está no array
const tem5 = arr.includes(5);
console.log("Tem 5: "+tem5); // true