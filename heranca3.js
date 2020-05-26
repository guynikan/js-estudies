const pai = { nome: "Pedro", corCabelo: "Preto" };

// cria herança
const filha1 = Object.create(pai);

filha1.nome = "Ana";
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
  nome: { value: "Bia", writable: false, enumerable: true },
});

console.log(filha2.nome);

for (let key in filha2) {
  filha2.hasOwnProperty(key)
    ? console.log(key)
    : console.log(`Por herança: ${key}`);
}
