// pessoa -> 123 -> {...}
const pessoa = { nome: "João" };
pessoa.nome = "Pedro";
console.log(pessoa);

// pessoa -> 456 -> {...} -> erro
// pessoa = { nome: "Ana" };

Object.freeze(pessoa); // o objeto virou uma constante

pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({ nome: "João" });
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);
