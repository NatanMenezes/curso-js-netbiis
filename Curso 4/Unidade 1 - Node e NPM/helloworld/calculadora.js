export class Calculadora {

    static somar(a, b) {
        return a + b;
    }

    static subtrair(a, b) {
        return a - b;
    }

    static multiplicar(a, b) {
        return a * b;
    }

    static dividir(a, b) {
        return a / b;
    }
}

export class CalculadoraCientifica extends Calculadora {

    static potencia(a, b) {
        return Math.pow(a, b);
    }

    static raiz(a) {
        return Math.sqrt(a);
    }

    static log(a) {
        return Math.log(a);
    }
}

export default Calculadora;