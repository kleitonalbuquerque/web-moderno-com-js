const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vidro", preco: 12.49, fragil: true },
  { nome: "Copo de Plástivo", preco: 4.99, fragil: false },
];

const precoProdutosFiltrados = [];

// Filtrando produtos caros e frágies
console.log(
  produtos.filter(function (p) {
    if (p.preco > 500 && p.fragil) {
      precoProdutosFiltrados.push(p);
      return p;
    }
  })
);

console.log("precoProdutosFiltrados: ", precoProdutosFiltrados);
console.log("#################################################");

// Outra forma de filtrar produtos caros e frágeis
const caro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(caro, fragil));
