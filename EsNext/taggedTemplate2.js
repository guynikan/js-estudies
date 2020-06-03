function real(partes, ...valores) {
  // recebe as partes (strings) e valores(valores de variáveis/constantes) passadas através de um template string
  const resultado = [];
  // itera sobre os valores das variáveis, pegando o valor e o indice (rest)
  valores.forEach((valor, indice) => {
    // verifica se o valor de valor é um not a number, se for, retorna ele mesmo, se não for, trata
    // adicionando a máscara de Real e toFixed(2)
    valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`;
    // adicionado ao array resultado as partes, seguida do valor (intercala), formando a string completa
    resultado.push(partes[indice], valor);
  });

  return resultado.join("");
}

const preco = 29.99;
const precoParcela = 11;
console.log(real`1x de ${preco} ou 3x de ${precoParcela}`);
