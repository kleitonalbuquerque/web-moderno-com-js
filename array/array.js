console.log(typeof Array, typeof new Array(), typeof []);

let aprovados = new Array("Maria", "João", "José", "Adriana");
console.log(aprovados);

aprovados = ["Maria", "João", "José", "Adriana"];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);
console.log(aprovados[4]);

aprovados[4] = "Paulo";
aprovados.push("Mariana");
console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);
console.log(aprovados[8] === undefined);
console.log(aprovados);
aprovados.sort();
console.log(aprovados);
console.log(aprovados[0]);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ["Bia", "Carlos", "Maria"];
aprovados.splice(1, 1, "Elemento1", "Elemento2"); // Exclui elementos à partir do índice 1 nesse caso Carlos e add mais dois elementos
console.log(aprovados);
