const pilotos = ["Vettel", "Alonso", "Raikkonen", "Hamilton", "Massa"];
pilotos.pop(); // Massa quebrou o carro!
console.log(pilotos);

pilotos.push("Verstappen");
console.log(pilotos);

pilotos.shift(); // remove o primeiro!
console.log(pilotos);

pilotos.unshift("Vettel");
console.log(pilotos);

// splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // Massa quebrou :(
console.log(pilotos);

// slice novo array (slice = pedaço)

const algunsPilotos1 = pilotos.slice(2); // novo array à partir do índice 2
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
