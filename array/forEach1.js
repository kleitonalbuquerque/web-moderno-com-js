const aprovados = ["José", "Maria", "Pedro", "Paulo"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});

aprovados.forEach((nome, i) => console.log(`${i + 1}) ${nome}`));
aprovados.forEach((nome) => console.log(nome));

const exibirAprovados = (aprovado) => console.log(aprovado);
aprovados.forEach(exibirAprovados);
