const escola = "Cod3r";

console.log(escola.charAt(4)); // retorna letra r
console.log(escola.charAt(5)); // retorna vazio
console.log(escola.charCodeAt(3)); // retorna 51, valor da tabela ASC
console.log(escola.indexOf("3")); // retorna 3, posição do elemento no array
console.log(escola.substring(1)); // retorna od3r
console.log(escola.substring(0, 3)); // retorna Cod
console.log("Escola ".concat(escola).concat("!")); // retorna Escola Cod3r!
console.log("Escola " + escola + "!"); // retorna Escola Cod3r!
console.log(escola.replace(3, "e")); // retorna Coder
console.log("Ana,Maria,Pedro".split(",")); // transforma a string em array retornando [ 'Ana', 'Maria', 'Pedro' ]
