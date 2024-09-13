// let e const
let nome = 'João';
nome = 'Pedro';
console.log(nome);

const sobrenome = 'Silva';
// sobrenome = 'Oliveira'; // Erro
// console.log(sobrenome);


// Tipos primitivos
// string
let nome2 = 'João'; // ou "João" ou `João`
// console.log(typeof nome2);
// number
let idade = 25;
// console.log(typeof idade);
// boolean
let possuiFaculdade = true;
// console.log(typeof possuiFaculdade);
// undefined
let preco;
// console.log(typeof preco);
// null
let altura = null;
// console.log(typeof altura);
// object
let pessoa = {
  nome: 'João',
  idade: 25,
  possuiFaculdade: true
};
let familia = [1, 2, 3, 4];
// Modificando e acessando conteúdo de arrays e objetos
pessoa.possuiFaculdade = false;
familia[0] = 5;
console.log(pessoa.possuiFaculdade);
console.log(familia[0]);
// console.log(typeof familia);