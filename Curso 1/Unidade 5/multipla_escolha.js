const diaDaSemanaTeste = 4;

switch (diaDaSemanaTeste) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sábado');
        break;
    default:
        console.log('Dia inválido');
}

function diaDaSemana(dia) {
    switch (dia) {
        case 1:
            return 'Domingo';
        case 2:
            return 'Segunda';
        case 3:
            return 'Terça';
        case 4:
            return 'Quarta';
        case 5:
            return 'Quinta';
        case 6:
            return 'Sexta';
        case 7:
            return 'Sábado';
        default:
            return 'Dia inválido';
    }
}

function diaDaSemanaNumber(dia) {
    switch (dia) {
        case 'domingo':
            return 1;
        case 'segunda':
            return 2;
        case 'terça':
            return 3;
        case 'quarta':
            return 4;
        case 'quinta':
            return 5;
        case 'sexta':
            return 6;
        case 'sábado':
            return 7;
        default:
            return 'Dia inválido'
}
}

console.log(diaDaSemana(4)); // Quarta
console.log(diaDaSemanaNumber("quarta")); // Quarta