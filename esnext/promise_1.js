let p = new Promise(function (cumprirPromessa) {
  cumprirPromessa({
    x: 3,
    y: 4,
  });
});

function primeiroElemento(array) {
  return array[0];
}

function primeiraLetra(string) {
  return string[0];
}

const letraMinuscula = (letra) => letra.toLowerCase();

p.then(function (valor) {
  console.log(valor);
  console.log(valor.x);
});

new Promise(function (resolve) {
  resolve(["Ana", "Bia", "Carlos", "João"]);
})
  .then(primeiroElemento)
  .then(primeiraLetra)
  .then(letraMinuscula)
  .then(console.log);
