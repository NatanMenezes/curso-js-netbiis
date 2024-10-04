const agora = new Date();

const dataEspecifica1 = new Date(2021, 7, 14, 22, 15, 30); // 14 de agosto de 2021, 22:15:30

const diferencaEntreDatas = agora - dataEspecifica1;
// diferença em dias
const diaEmMilissegundos = 24 * 60 * 60 * 1000;
const diferencaEmDias = (diferencaEntreDatas / diaEmMilissegundos).toFixed(0);
const restante = diferencaEntreDatas % diaEmMilissegundos;
const diferencaEmHoras = (restante / (60 * 60 * 1000)).toFixed(0);
console.log(diferencaEmDias);