const tecnologias = new Map();

tecnologias.set("react", { framework: false });
tecnologias.set("angular", { framework: true });

// para acessar os atributos da chave indicada, se chama através de get
console.log(tecnologias.get("react"));

const chavesVariadas = new Map([
  [function () {}, "função"],
  [{}, "Objeto"],
  [123, "Número"],
]);

// itera sobre os elementos do array de Map
chavesVariadas.forEach((vl, ch) => {
  // imprime a chave e o valor dos elementos
  console.log(ch, vl);
});

// verifica se a chave 123 está contida em chavesVariadas
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
// atributo que retorna quantos elementos há em Map
console.log(chavesVariadas.size);
