// operador ... rest(juntar)/spread(espalhar)

// usar spread com objeto
const funcionario = { nome: "Maria", salario: 1230.2 };
const clone = { ativo: true, ...funcionario };

console.log(clone);

// spread com array

const GrupoA = ["Rafaela", "Josefa"];
const GrupoB = ["Carina", "Amelia", ...GrupoA];

console.log(GrupoB);
