let a = 3;

globalThis.b = 123;

this.c = 456;
this.d = false;
this.e = "teste";

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this); // true
console.log(module.exports); // { c: 456, d: false, e: 'teste' }

// criando uma variável maluca: sem var ou let!
abc = 3; // não faça isso em casa!!!
console.log(global.abc);
