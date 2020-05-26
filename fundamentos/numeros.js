const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso2));

const avaliacao1 = 5.664;
const avaliacao2 = 2.335;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString());

// Alguns cuidados
console.log(7 / 0); // tipo infinity
console.log("20" / 2);
console.log("show" * 2); // tipo NaN
console.log((10.433443).toFixed(2));
