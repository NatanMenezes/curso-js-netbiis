const pessoa = {
    nome: 'João',
    idade: 25,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    },
    tecnologias: ["JavaScript", "HTML", "CSS"],
    saudacao: function() {
        console.log('Olá, meu nome é ' + this.nome);
    }
}

console.log(pessoa.nome); // João
pessoa.nome = 'Pedro';
console.log(pessoa['nome']); // Pedro
pessoa.saudacao(); // Olá, meu nome é Pedro
pessoa.novaPropriedade = 'Nova Propriedade';
console.log(pessoa.novaPropriedade);

for (let propriedade in pessoa) {
    console.log(propriedade + ': ' + pessoa[propriedade]);
}