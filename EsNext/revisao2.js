// Arrow Function

const soma = (a, b) => a + b;

console.log(soma(2, 3));

// Arrow Function (this)

// uma arrow function sempre aponta pra onde ela foi definida (tem memória)
const lexico1 = () => console.log(this === exports);
// nunca muda, nem com bind, call ou apply
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// parametro default
function log(texto = "Node") {
  console.log(texto);
}

log();
log("Sou mais forte");

//operador rest

// junta os parametros passados formando um array que pode ser percorrido dentro da função
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return total;
}

console.log(total(1, 2, 3, 4, 5));
