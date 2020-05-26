function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1,
  };
}

console.log(criarProduto("tv", 4500));
console.log(criarProduto("notebook", 6500));
