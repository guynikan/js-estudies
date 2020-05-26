// funcao sem retorno

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(); // NaN
imprimirSoma(2, 3, 4, 5, 3); // ignora params extras

// Funcao com retorno

function soma(a, b = 0) {
  return a + b;
}

console.log(soma(5));
console.log(soma(2, 5));
console.log(soma()); // NaN
