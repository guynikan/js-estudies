const notas = [7.7, 7.6, 7.7, 4.5, 3.6, 7.8, 5.7, 8.0, 9.0];

// sem callback
const notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

// com callback

const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasBaixas2);

const notasBaixas3 = notas.filter((nota) => nota < 7);

console.log(notasBaixas3);
