// Destructuring

// atributos de um objeto
const produto = {
  nome: "iPad",
  preco: 1.4,
  fragil: true,
};

const { nome, fragil } = produto;

console.log(nome, fragil);

// elementos de um array

const pessoas = ["Ana", "Flavia", "Patricia"];

const [, , patricia] = pessoas;

console.log(patricia);
