const alunos = [
  { nome: "Maria", nota: 9.2 },
  { nome: "João", nota: 7.0 },
];

const media = alunos.map((a) => a.nota).reduce((total, atual) => total + atual);
console.log(media / alunos.length);
