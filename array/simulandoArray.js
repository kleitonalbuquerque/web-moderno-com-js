const quaseArray = { 0: "Maria", 1: "Paulo", 2: "Pedro" };
console.log(quaseArray);

Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});

console.log(quaseArray[0]);

const meuArray = ["Maria", "Paulo", "Pedro"];
console.log(quaseArray.toString(), meuArray);
