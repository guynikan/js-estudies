// desestrutura o objeto já na passagem de argumentos pra função (brabo)
function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));
console.log(rand({ min: 955 })); // parametro opcional
console.log(rand({})); // objeto vazio dá bom
// console.log(rand()); erro pq n tem nada
