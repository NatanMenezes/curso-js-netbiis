const dataAtual = new Date();
const diaEmMilissegundos = 24 * 60 * 60 * 1000;

const dataExpiracao = new Date(dataAtual.getTime() + 5*diaEmMilissegundos);
console.log(dataExpiracao);

// Modificando a hora
dataExpiracao.setHours(0, 0, 0, 0);
// Modificando o dia
dataExpiracao.setDate(5);
// Modificando o mês
dataExpiracao.setMonth(5);
// Modificando o ano
dataExpiracao.setFullYear(2022);
// Modificando o minuto
dataExpiracao.setMinutes(30);
// Modificando o segundo
dataExpiracao.setSeconds(15);

console.log(dataExpiracao);