// itera sobre valores (for in itera sobre chaves(indices))

for (let letra of "Coder") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];

// retorna o indice dos elementos do array
for (let i in assuntosEcma) {
  console.log(i);
}

// retorna o valor do elemento
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promisse", { abordado: false }],
]);

// retorna a chave e o valor em um array
for (let assunto of assuntosMap) {
  console.log(assunto);
}

// retorna só as chaves
for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

// retorna chave e valor separados ao invés de em um array
for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(["a", "b", "c"]);

for (let letra of s) {
  console.log(letra);
}
