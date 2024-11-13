class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        if (this.constructor === Veiculo) {
            throw new Error('Veiculo é uma classe abstrata e não pode ser instanciada');
        }
    }

    acelerar() {
        console.log('Acelerando ...');
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }

    abrirPorta(){
        console.log('Abrindo porta...');
    }

    acelerar(){
        console.log('Acelerando o ' + this.modelo + '...');
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
    acelerar(){
        console.log('Acelerando o ' + this.modelo + '...');
    }
}

const carro = new Carro('Toyota', 'Corolla', 2021, 4);
const moto = new Moto('Honda', 'CBR', 2021, 1000);
carro.acelerar();