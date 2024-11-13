const pessoa = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    },
    tecnologias: ['Javascript', 'HTML', "CSS"],
    saudacao: function(){
        console.log("Olá, meu nome é " + this.nome);
    }
}

console.log(pessoa);
console.log(pessoa.nome); //João
pessoa.nome = 'Pedro';
console.log(pessoa['nome']); //Pedro
pessoa.saudacao();