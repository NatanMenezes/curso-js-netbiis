class Funcionario{
    constructor(nome, cpf , email){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;

    }

}

class FuncionarioHorista extends Funcionario {
    constructor(salario){
        this.salario = salario;
        
    }
}

class FuncionarioMensalissta extends Funcionario {
    constructor(salario){
        this.salario = salario;
    }
}