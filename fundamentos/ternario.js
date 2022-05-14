const resultado = (nota) =>
  nota >= 7 ? "Aprovado" : nota >= 5 && nota <= 6 ? "Recuperação" : "Reprovado";

console.log(resultado(7));
console.log(resultado(6));
console.log(resultado(5));
console.log(resultado(4));
