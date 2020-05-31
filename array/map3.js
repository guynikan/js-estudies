Array.prototype.map2 = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }

  return newArray;
};

const carrinho = [
  '{ "nome": "Borracha", "preco": 3.45}',
  '{ "nome": "Caderno", "preco": 13.90}',
  '{ "nome": "Kit de Lapis", "preco": 41.22}',
  '{ "nome": "Caneta", "preco": 7.50}',
];

// recebe o elemento e faz um parse nele pra objeto
const paraObjeto = (json) => JSON.parse(json);

// recebe o elemento e retorna o preco (propriedade do elemento)
const apenasPreco = (produto) => produto.preco;

// itera sobre carrinho, passando cada um dos elementos do array
// para a função que parseia. Após isso, itera sobre os objetos e retorna apenas o preço
const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);

/*
  é passada pra map uma função que recebe um parâmetro e retorna um parse(usando o parâmetro)
  em map é executada uma função, que recebe um parâmetro (a função paraObjeto) e itera
  sobre o tamanho do array(this aqui é o array que chama map).
  cria um novo array, adicionando como elemento o retorno da callback passada por parâmetro (paraObjeto)
  passando pra ela três parâmetros: 
  this[i] (os elementos do array que chamou o map),
  i (o index dos elementos),
  this (o próprio array)

  retorna o novo array criado a partir do retorno da callback passada por parâmetro

  */
