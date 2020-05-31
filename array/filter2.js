Array.prototype.filter2 = function (callback) {
  let newArray = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }

  return newArray;
};

const produtos = [
  { nome: "Notebook", preco: 2499, fragil: true },
  { nome: "iPad Pro", preco: 4199, fragil: true },
  { nome: "Copo de Vrido", preco: 12.49, fragil: true },
  { nome: "Copo de Prástico", preco: 18.99, fragil: false },
];

console.log(
  produtos.filter2(function (e) {
    return e.fragil && e.preco >= 500;
  })
);
