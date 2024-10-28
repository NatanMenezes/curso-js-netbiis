import validator from "validator";
// Poderia ser qualquer nome, já que foi exportado como default
import Calc from "./calculadora.js";
import { CalculadoraCientifica, Calculadora } from "./calculadora.js";

console.log(validator.isEmail("abc@mail.com"));
console.log(validator.equals("abc", "abc"));

// Utilizando a classe exportada como default
console.log(Calc.soma(1, 2));
// Utilizando as classes internas exportadas normalmente
console.log(Calculadora.subtracao(1, 2));
console.log(CalculadoraCientifica.raizQuadrada(9));