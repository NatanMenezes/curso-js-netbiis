let arr = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' },
    { id: 3, nome: 'José' }
];

arr.sort((a, b) => b.id - a.id)
arr.forEach(el => console.log(el.nome)) // Maria, José, João