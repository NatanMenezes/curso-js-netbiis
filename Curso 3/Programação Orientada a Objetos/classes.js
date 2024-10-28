class Pessoa {
    email;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

const pessoa1 = new Pessoa('João', 20);
console.log(pessoa1.apresentar());
pessoa1.email = 'teste@teste.com';
pessoa1.idade = 21;
console.log(pessoa1.email);
console.log(pessoa1.apresentar());
