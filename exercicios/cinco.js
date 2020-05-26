function transformaDinheiro(x) {
  let casasDecimais = x.toFixed(2);
  let pontoPraVirgula = casasDecimais.replace(".", ",");
  return `R$ ${pontoPraVirgula}`;
}

console.log(transformaDinheiro(Math.PI));
