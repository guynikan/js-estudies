// tagged template - processa uma template string dentro de uma função

function tag(partes, ...valores) {
  // recebe o que é string dentro do template string
  console.log(partes);
  // recebe o que é variável dentro do template string
  console.log(valores);
  return "Outra string";
}

const aluno = "Gui";
const situacao = "Aprovado";

console.log(tag`${aluno} está ${situacao}.`);
