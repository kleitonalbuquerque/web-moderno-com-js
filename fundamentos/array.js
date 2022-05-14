const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores);
console.log(valores[0], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({ id: 1 }, false, null, "teste"); // não indicado pois o array deve ter os tipos de dados iguais
console.log(valores);
console.log(valores[5]);

console.log(valores.pop()); // remove o último ítem do array
console.log(valores);

delete valores[0]; // remove o primeiro item do array
console.log(valores);

console.log(typeof valores);
