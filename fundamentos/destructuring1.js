// ES6

const pessoa = {
  nome: "Ana",
  idade: 25,
  endereco: {
    logradouro: "Rua ABC",
    numero: 100,
  },
};

const { nome, idade } = pessoa;

console.log(nome, idade);

const { nome: n, idade: i } = pessoa;

console.log(n, i);

const { sobrenome, bemHumorada = true } = pessoa;

console.log(sobrenome, bemHumorada);

// objeto dentro de objeto
const {
  endereco: { logradouro, numero, cep },
} = pessoa;

console.log(logradouro, numero, cep);
