// usando notação literal
const obj1 = {};
console.log(obj1);

// Object em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

// Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome;
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto("Caneta", 2.99, 0.15);
const p2 = new Produto("Notebook", 2999.99, 0.25);
console.log(
  p1.getPrecoComDesconto().toFixed(2),
  p2.getPrecoComDesconto().toFixed(2)
);

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

console.log("##########################################");

const f1 = criarFuncionario("João", 7980, 4);
const f2 = criarFuncionario("Maria", 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

console.log("##########################################");

// Obect.create
const filha = Object.create(null);
filha.nome = "Mariana";
console.log(filha);

console.log("##########################################");

// Função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);
