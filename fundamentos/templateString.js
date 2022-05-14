const nome = "Mariana";
const concatenacao = "Olá " + nome + "!";
const template = `
  Olá ${nome}!
`;

console.log(concatenacao, template);

// expressões...
console.log(`1 + 1 = ${1 + 1}`);

const up = (texto) => texto.toUpperCase();
console.log(`Hei... ${up("cuidado")}!`);
