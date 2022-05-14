const funcs = [];

for (var i = 0; i < 10; i++) {
  // funcs.push(i);
  funcs.push(function () {
    console.log(i);
  });
}

console.log(funcs);
// console.log(funcs[4] - 1);
funcs[2]();
funcs[8]();
