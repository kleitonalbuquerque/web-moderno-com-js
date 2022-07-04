const pessoa = {
  nome: "Mariana",
  idade: 3,
  peso: 18,
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.table(Object.entries(pessoa));
console.log(Object.entries(pessoa)[0]);

console.log("#####################################");

Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
});

console.log("#####################################");

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

console.log("#####################################");

Object.entries(pessoa).forEach(([chave, valor]) => {
  if (valor == "Mariana") {
    console.log("Menina sapeca do papai");
  }
  // console.log(`${chave}: ${valor}`);
});

console.log("#####################################");

// const id = 0

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "12/06/2019",
  // value: id++
});

pessoa.dataNascimento = "12/06/2019";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

console.log("#####################################");

// function meninaDeOuro() {
//   if (Object.entries(pessoa)[0]) {
//     console.log("Menina de ouro");
//   } else console.table(pessoa);
// }

// meninaDeOuro();

function meninaDeOuro2() {
  if (Object.keys("nome") && Object.values("Mariana")) {
    console.log("Menina de ouro");
  } else console.table(pessoa);
}

meninaDeOuro2();

console.log("#####################################");

// Object.assign (ECMAScript 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
