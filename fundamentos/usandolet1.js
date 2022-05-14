let numero = 1;
{
  let numero = 2; // escopo global, função e bloco
  console.log("dentro = ", numero);
}

console.log("fora = ", numero);
