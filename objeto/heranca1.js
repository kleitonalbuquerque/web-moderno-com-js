const ferrari = {
  modelo: "F40",
  velMax: 340,
};

const volvo = {
  modelo: "V40",
  velMax: 240,
};

console.log(ferrari.prototype);
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ == Object.prototype);
console.log(volvo.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__ === null);
console.log(Object.prototype.__proto__);

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);