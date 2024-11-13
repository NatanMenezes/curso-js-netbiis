class Nota {
    constructor(disciplina, valor) {
        this.disciplina = disciplina;
        this.valor = valor;
    }
}

class Aluno {
    constructor(nome, matricula){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    adicionarNota(disciplina, valor){
        const nota = new Nota(disciplina, valor);
        this.notas.push(nota);
    }

    calcularMedia(){
        if(this.notas.length === 0) {
            return 0;
        }

        const soma = this.notas.reduce((total,nota) => total + nota.valor, 0);
        return soma / this.notas.length;
    }

    exibirDados(){
        const media = this.calcularMedia();
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média: ${media.toFixed(2)}`);

    }   

}

const aluno = new Aluno("Pedro Klimaitis", "1234567890");

aluno.adicionarNota("Geografia" , 7);
aluno.adicionarNota("Geografia", 8.5);
aluno.adicionarNota("Geografia", 6);

aluno.exibirDados();

