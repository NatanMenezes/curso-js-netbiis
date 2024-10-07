const agora = new Date();

const dataFormatada = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long'
}).format(agora);
console.log(dataFormatada);

const numero = 50;

const moeda = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
}).format(numero);

const porcento = new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    currency: 'BRL',
}).format(numero);

console.log(moeda);
console.log(porcento);