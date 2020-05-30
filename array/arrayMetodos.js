const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];
pilotos.pop(); // tira o ultimo elemento do array
console.log("1)", pilotos);

pilotos.push("Verstappen");
console.log("2)", pilotos);

pilotos.shift(); // tira o primeiro elemento do array
console.log("3)", pilotos);

pilotos.unshift("Hamilton");
console.log("4)", pilotos);

const algunsPilotos = pilotos.slice(2); // gera um novo array a partir do indice indicado

console.log("Alguns Pilotos", algunsPilotos);
