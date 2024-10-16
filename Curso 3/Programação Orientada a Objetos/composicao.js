class Endereco {
    constructor(params) {
        this.cep = params.cep;
        this.rua = params.rua;
        this.numero = params.numero;
        this.cidade = params.cidade;
        this.uf = params.uf;
    }

    mostrarEndereco() {
        return `Endereço: ${this.rua}, ${this.numero}, ${this.cidade} - ${this.uf}, ${this.cep}`;
    }
}
class Pessoa {
    // constructor(nome, idade, endereco) {
    //     this.nome = nome;
    //     this.idade = idade;
    //     this.endereco = endereco;
    // }

    constructor(params) {
        this.nome = params.nome;
        this.idade = params.idade;
        if (params.endereco instanceof Endereco) {
            this.endereco = params.endereco;
        } else {
            throw new Error('O endereço deve ser uma instância da classe Endereco');
        }
    }


    apresentar() {
        return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos. Moro em ${this.endereco.mostrarEndereco()}`;
    }
}
const endereco1 = new Endereco({
    cep: '12345-678',
    rua: 'Av. Principal',
    numero: 100,
    cidade: 'São Paulo',
    uf: 'SP'
});
const pessoa1 = new Pessoa({
    nome: 'João',
    idade: 20,
    endereco: "Rua x, 123"
});

console.log(pessoa1.apresentar());