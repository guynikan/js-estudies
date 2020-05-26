console.log(typeof Object);
console.log(typeof new Object());

const Cliente = function () {};
console.log(typeof Cliente);
console.log(typeof new Cliente());

class Produto {} // ES6

console.log("Produto", typeof Produto);
console.log("typeof da instancia de um novo produto", typeof new Produto());
