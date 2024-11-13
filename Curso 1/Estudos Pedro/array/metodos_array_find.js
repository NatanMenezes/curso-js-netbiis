const arr = [1, 2, 3, 4, 5];

//find() retorna o primeiro elemento que satisfaça a condição
const maiorQue3 = arr.find((elemento) => elemento > 3);
console.log("Primeiro elemento maior que 3 " + maiorQue3);

//findIndex() retorna o índice do primeiro elemento que satisfaça a condição
const indiceMaiorQue3 = arr.findIndex((elemento) => elemento >3);
console.log("Primeiro elemento maior que 3 " + indiceMaiorQue3);

