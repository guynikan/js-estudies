function getPreco(imposto = 0, moeda = "R$") {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: "Notebook",
  preco: 4589,
  desc: 0.15,
  getPreco,
};

/* 
existem quatro formas de se chamar uma função:
1) diretamente (getPreco())
2) a partir do objeto (produto.getPreco())
3) usando call e apply (getPreco.call(contexto, parametros da função)
4) usando call e apply (getPreco.apply(contexto, parametros da função)*/

console.log(getPreco());
console.log(produto.getPreco());

const carro = { preco: 50000, desc: 0.1 };

// a diferença de um pro outro ta na forma como se passa os params pra func
// um se passa que nem gente e o outro como array
console.log(getPreco.call(carro, 0.17, "$"));
console.log(getPreco.apply(carro, [0.17, "$"]));
