const alunos = [
  { nome: "Joao", nota: 7.3, bolsista: false },
  { nome: "Maria", nota: 9.2, bolsista: true },
  { nome: "Pedro", nota: 9.8, bolsista: false },
  { nome: "Ana", nota: 8.7, bolsista: true },
];

// Todos os alunos são bolsistas?

const todosSaoBolsistas = alunos
  .map((a) => a.bolsista)
  .reduce(function (acumulador, atual) {
    return acumulador + atual;
  });

console.log(!todosSaoBolsistas);

//correção:

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;

// reduce chama a função (todosBolsistas) passando pra ela o valor anterior e o valor atual
// a função então se encarrega de aplicar a lógica e verificar se um E o outro são verdadeiros
console.log(alunos.map((a) => a.bolsista).reduce(todosBolsistas));

// Algum aluno é bolsista?

const algumEBolsitas = alunos
  .map((a) => a.bolsista)
  .reduce(function (acumulador, atual) {
    if (acumulador) return acumulador;
    else return atual;
  });

console.log(algumEBolsitas);

// correção

const algumBolsista = (resultado, bolsista) => resultado || bolsista;

// reduce chama a função (algumBolsista) passando pra ela o valor anterior e o valor atual
// a função então se encarrega de aplicar a lógica e verificar se um OU outro é verdadeiro
console.log(alunos.map((a) => a.bolsista).reduce(algumBolsista));
