let arr = [1, 3, 3, 5, 7, 7, 7, 9];

let soma = 0;

for(let numero of arr){
    soma = numero + soma;
    console.log(soma);
}

console.log("A soma final ficou: " + soma);