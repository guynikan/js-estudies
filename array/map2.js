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
const resultado = carrinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);
