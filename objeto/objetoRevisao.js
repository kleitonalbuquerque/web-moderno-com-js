// coleçaõ dinâmica chave/valor
const produto = new Object();
produto.nome = "Cadeira";
produto["marca do produto"] = "Generica"; // não indicado
produto.preco = 220;

console.log(produto);
delete produto["marca do produto"];
delete produto.preco;
console.log(produto);

const carro = {
  modelo: "A4",
  valor: 89000,
  proprietario: {
    nome: "Otavio",
    idade: 56,
    endereco: {
      logradouro: "Rua ABC",
      numero: 123,
    },
  },
  condutores: [
    {
      nome: "José",
      idade: 35,
    },
    {
      nome: "Maria",
      idade: 28,
    },
  ],
  calcularValorSeguro: function () {
    // ...
  },
};

console.log("#####################################");

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["logradouro"] = "Av Gigante";
console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log("#####################################");
console.log(carro);
