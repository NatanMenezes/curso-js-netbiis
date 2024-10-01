const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// JSON.parse() converte uma string JSON em um objeto JavaScript
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);
jsonObject.name = 'Jane';
// JSON.stringify() converte um objeto JavaScript em uma string JSON
const jsonString2 = JSON.stringify(jsonObject);
console.log(jsonString2);