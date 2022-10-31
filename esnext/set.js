// não aceita repetição/não indexada
const times = new Set();
times.add("Palmeiras");
times.add("Real Madrid").add("Liverpool").add("Milan").add("PSG");
times.add("Palmeiras");

console.log(times);
console.log(times.size);
console.log(times.has("Palmeiras"));
console.log(times.has("palmeiras"));
console.log(times.delete("PSG"));
console.log(times.has("PSG"));
console.log(times);

const nomes = ["Raquel", "Lucas", "Julia", "Lucas"];
const nomesSet = new Set(nomes);
console.log(nomesSet);
