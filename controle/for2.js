const notas = [6.6, 7.4, 9.8, 8.1, 7.7];

for (let i in notas) {
  console.log(i, notas[i]);
  // console.log(`Nota: ${notas[i]}`);
}

const pessoa = {
  nome: "Mariana",
  sobrenome: "Albuquerque",
  idade: 2,
  peso: 17,
};

for (let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);
}
