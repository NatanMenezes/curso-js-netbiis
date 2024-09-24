let numero = null;
try {
    // TypeError
    console.log(numero.toUpperCase());
    
    // ReferenceError
    console.log(teste);
    
    // SyntaxError
    // console.log('teste);
} catch (erro) {
    console.log('Ocorreu um erro: ' + erro.message);
} finally {
    console.log('Finalizou o bloco try catch');
}

