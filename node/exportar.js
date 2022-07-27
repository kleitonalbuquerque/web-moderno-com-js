console.log(module.exports);
console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

// não será retornado
exports = null;
console.log(module.exports);

// objeto não será retornado
exports = {
  nome: "Teste",
};

console.log(module.exports);

module.exports = { publico: true };
