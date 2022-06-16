function criarProduto(nome, preco, desconto = 0.1) {
  return {
    nome: nome,
    preco: preco - preco * desconto,
  };
}

produto1 = new criarProduto("Peixe", 59.0);
console.log(produto1);

produto2 = new criarProduto("Frango", 15.0, 0.2);
console.log(produto2);
