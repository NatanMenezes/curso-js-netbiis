// Operadores lógicos

// E (&&)
// Retorna verdadeiro se todos os operandos forem verdadeiros
let e = false && true && true;

// OU (||)
// Retorna verdadeiro se pelo menos um dos operandos for verdadeiro
let ou = true || false || false;

// Negação (!)
// Inverte o valor do operando
let negacao = !true;
let negacao2 = !false;

console.log("E: " + e); // true
console.log("OU: " + ou); // true
console.log("Negação: " + negacao); // false
console.log("Negação 2: " + negacao2); // true