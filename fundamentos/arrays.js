const valores = [7, 8, 4, 3, 2];

console.log(valores);

// undefined
console.log(valores[5]);
console.log(valores.length);

// don't do that!!! (varios tipos em um único array)
valores.push({ id: 3 }, false, null, "teste");

console.log(valores);

// retira valor de um array (no caso do pop, retira o último)
console.log(valores.pop());
delete valores[0];

console.log(valores);

// object
console.log(typeof valores);
