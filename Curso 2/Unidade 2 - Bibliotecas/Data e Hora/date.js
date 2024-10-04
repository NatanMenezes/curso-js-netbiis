let agora = new Date();
console.log(agora);

let dataEspecifica1 = new Date(2021, 7, 14, 22, 15, 30); // 14 de agosto de 2021, 22:15:30
// console.log(dataEspecifica1);

let dataEspecifica2 = new Date('2021-08-14T22:15:30');
// console.log(dataEspecifica2); // 14 de agosto de 2021, 22:15:30

let dataEspecifica3 = new Date('2021-08-14');
// console.log(dataEspecifica3); // 14 de agosto de 2021, 00:00:00

// Pegando dados específicos da data
console.log(agora.getFullYear()); // 2024
console.log(agora.getMonth() + 1); // 10
console.log(agora.getDate()); // 14
console.log(agora.getDay()); // 4 - Quinta-feira
console.log(agora.getHours()); // 22
console.log(agora.getMinutes()); // 15
console.log(agora.getSeconds()); // 30
console.log(agora.getTime());

let teste = new Date(1728001558626);
console.log(teste);

const dataCompleta = `${agora.getDate()}/${agora.getMonth() + 1}/${agora.getFullYear()}`;
console.log(dataCompleta);