function calcularHorasTrabalhadas(timeInicio, timeFim) {
    const diferenca = timeFim - timeInicio;
    const horasEmMS = 1000 * 60 * 60;
    const horas = diferenca / horasEmMS;
    const restante = diferenca % horasEmMS;
    const minutos = restante / (1000 * 60);
    return `${horas.toFixed(0)} horas e ${minutos.toFixed(0)} minutos`;
}

function calcularTempoPassado(time) {
    const agora = new Date();
    const diasEmMS = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;

    const diferenca = agora.getTime() - time;
    const dias = diferenca / diasEmMS;
    const restanteDias = diferenca % diasEmMS;
    const horas = restanteDias / horasEmMS;
    const restanteHoras = restanteDias % horasEmMS;
    const minutos = restanteHoras / minutosEmMS;

    return `${dias.toFixed(0)} dias, ${horas.toFixed(0)} horas e ${minutos.toFixed(0)} minutos`;
}

const fim = new Date();
const inicio = new Date();
inicio.setHours(8, 0, 0);

const horasTrabalhadas = calcularHorasTrabalhadas(inicio.getTime(), fim.getTime());
console.log(horasTrabalhadas);

const tempoPassado = calcularTempoPassado(0);
console.log(tempoPassado);