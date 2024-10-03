var alunos = [
    {nome: 'Pedro', nota:7},
    {nome: 'Sandra', nota:6.5},
    {nome: 'Paulo', nota:8.5},
    {nome: 'Joaquim', nota:7.5},
    {nome: 'Felipe', nota:9},
    {nome: 'Kanye', nota:4},
    {nome: 'Maria', nota:6}
];

let alunosAprovados = [];
let soma = 0;

//Loop de soma
for(index in alunos){
    soma += alunos[index].nota;
}

for(var aluno of alunos){

    //Com condição
    if (aluno.nota >= 7){
        alunosAprovados.push(aluno);
    }

    //Com filter
    //alunos = alunos.filter(aluno => aluno.nota >= 7);
    
}
console.log("A soma das notas é ", soma);
console.log("Os alunos que ficaram acima da média: ", alunosAprovados);
//console.log("Os alunos que ficaram acima da média: ", alunos);