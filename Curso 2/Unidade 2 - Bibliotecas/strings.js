const stringExemplo = "Curso de JavaScript ";
// Métodos que funcionam com arrays e strings
console.log(stringExemplo.length); // 18
console.log(stringExemplo.slice(0, 5)); // Curso
console.log(stringExemplo.concat(" completo")); // Curso de JavaScript completo = stringExemplo + " completo"

// charArt() e charCodeAt()
console.log(stringExemplo.charAt(0)); // C
console.log(stringExemplo.charCodeAt(0)); // 67

// toLowerCase() e toUpperCase()
console.log(stringExemplo.toLowerCase()); // curso de javascript
console.log(stringExemplo.toUpperCase()); // CURSO DE JAVASCRIPT

// startsWith(), endsWith() e includes()
console.log(stringExemplo.startsWith("Curso")); // true
console.log(stringExemplo.endsWith("Python")); // false
console.log(stringExemplo.includes("JavaScript")); // true

// substring()
console.log(stringExemplo.substring(0, 5)); // Curso

// replace() e replaceAll()
console.log(stringExemplo.replace("a", "o")); // Curso de JovaScript
console.log(stringExemplo.replaceAll("a", "o")); // Curso de JovoScript

// split()
console.log(stringExemplo.split(" ")); // ["Curso", "de", "JavaScript"]

// trim()
console.log("  Curso de JavaScript  ".trim()); // Curso de JavaScript

// repeat()
console.log(stringExemplo.repeat(5)); // Curso de JavaScriptCurso de JavaScript

// padStart() e padEnd()
console.log(stringExemplo.padStart(25, ".")); // .......Curso de JavaScript
console.log(stringExemplo.padEnd(25, ".")); // Curso de JavaScript.......

// indexOf() e lastIndexOf()
console.log(stringExemplo.indexOf("a")); // 10
console.log(stringExemplo.lastIndexOf("a")); // 12
