let arr = [1, 2, 3, 4, 5];

// push() adiciona um ou mais elementos no final do array
let testePush = arr.push(6);
console.log(testePush); // Novo length do array
console.log(arr); // [1, 2, 3, 4, 5, 6]

// unshift() adiciona um ou mais elementos no início do array
let testeUnshift = arr.unshift(0);
console.log(testeUnshift); // Novo length do array
console.log(arr); // [0, 1, 2, 3, 4, 5, 6]

// pop() remove o último elemento do array
let testePop = arr.pop();
console.log(testePop); // Elemento removido
console.log(arr); // [0, 1, 2, 3, 4, 5]

// shift() remove o primeiro elemento do array
let testeShift = arr.shift();
console.log(testeShift); // Elemento removido
console.log(arr); // [1, 2, 3, 4, 5]