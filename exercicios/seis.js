function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao = 1) {
  let juros = taxaDeJuros / 100;
  montante = capitalInicial + capitalInicial * juros * tempoDeAplicacao;
  return montante;
}

function jurosCompostos(capitalInicial, taxaDeJuros, tempoDeAplicacao = 1) {
  let juros = taxaDeJuros / 100;
  let montante = capitalInicial * Math.pow(1 + juros, tempoDeAplicacao);

  return montante.toFixed(2);
}

console.log(jurosSimples(1000, 25, 1));
console.log(jurosCompostos(2000, 4, 4));
