// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de funcão

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 123489.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com array
const grupoA = ["João", "Pedro", "Glória"];
const grupoFinal = [...grupoA, "Maria", "Mariana"];
console.log(grupoFinal);
