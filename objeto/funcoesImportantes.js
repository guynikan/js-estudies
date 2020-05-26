const pessoa = {
  nome: "Rebeca",
  idade: "2",
  peso: "13",
};

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

// sem destructuring
Object.entries(pessoa).forEach((e) => {
  console.log(`${e[0]}: ${e[1]}`);
});

// com destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, "dataNascimento", {
  enumerable: true,
  writable: false,
  value: "01/01/2019",
});

pessoa.dataNascimento = "01/01/2017";
console.log(pessoa);

// Object.assign (ES6)

const dest = { a: 1 };
const o1 = { b: 2 };
// o último subscreve os anteriores, caso a chave seja a mesma
const o2 = { c: 3, a: 5 };

const obj = Object.assign(dest, o1, o2);

console.log(obj);
console.log(obj);
