// não aceita repetição e não é indexado
const times = new Set();
times.add("São Paulo");
times.add("Flamengo").add("Vasco").add("Fluminense");

// ignora pq tá repetindo
times.add("Vasco");

console.log(times);
console.log(times.size);
console.log(times.has("Vasco"));
times.delete("Flamengo");
console.log(times.has("Flamengo"));

const nomes = ["Raquel", "Lucas", "Julia"];

const nomeSet = new Set(nomes);

console.log(nomeSet);
