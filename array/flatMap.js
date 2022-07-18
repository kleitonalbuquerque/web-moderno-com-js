const escola = [
  {
    nome: "Turma M1",
    alunos: [
      {
        nome: "Gustavo",
        nota: 8.1,
      },
      {
        nome: "Mariana",
        nota: 9.8,
      },
    ],
  },
  {
    nome: "Turma M2",
    alunos: [
      {
        nome: "Rebeca",
        nota: 8.9,
      },
      {
        nome: "Roberto",
        nota: 7.3,
      },
    ],
  },
];

const getNotaDoAluno = (aluno) => aluno.nota;
const getNomeDoAluno = (aluno) => aluno.nome;
const getNotasDaTurma = (turma) => turma.alunos.map(getNotaDoAluno);
const getNomesAlunosTurma = (turma) => turma.alunos.map(getNomeDoAluno);

const notas1 = escola.map(getNotasDaTurma);
console.log(notas1);

console.log("");
console.log("#### Notas dos Alunos com concat ####");
console.log([].concat([8.1, 9.8], [8.9, 7.3]));

console.log("");
console.log("#### Notas dos Alunos com flatMap ####");
const notas2 = escola.flatMap(getNotasDaTurma);
console.log(notas2);

console.log("");
console.log("#### Nomes dos Alunos com flatMap ####");
const nomesAlunos = escola.flatMap(getNomesAlunosTurma);
console.log(nomesAlunos);
