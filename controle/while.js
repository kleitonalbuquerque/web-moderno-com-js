function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = 0;
let count = 0;

// usado para quantidade indeterminada de repetições
while (opcao != -1) {
  count++;
  opcao = getInteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}.`);
}

console.log("Vezes dentro do laço: ", count);
console.log("Até a próxima!");
