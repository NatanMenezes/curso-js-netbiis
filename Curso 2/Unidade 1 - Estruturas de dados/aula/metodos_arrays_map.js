const arr = [1, 2, 3, 4, 5];

const dobroArr = arr.map((item) => item * 2);
console.log(dobroArr); // [2, 4, 6, 8, 10]

const alunos = [
    { nome: 'João', idade: 15, notas: [7, 8, 9] },
    { nome: 'Maria', idade: 25, notas: [6, 8, 9] },
    { nome: 'José', idade: 30, notas: [5, 6, 7] }    
]

const alunosComMedia = alunos.map(aluno => {
    let somaNotas = 0;
    aluno.notas.forEach(nota => {
        somaNotas += nota;
    })
    const media = somaNotas / aluno.notas.length;
    // return {media, ...aluno};
    return {
        nome: aluno.nome,
        idade: aluno.idade,
        notas: aluno.notas,
        media: media,
    }
});
alunos.forEach(aluno => console.log(aluno));
console.log('-------------------');
alunosComMedia.forEach(aluno => console.log(aluno));