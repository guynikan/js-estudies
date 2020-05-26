class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`E o nome dela é ${this.nome}`);
  }
}

const p1 = new Pessoa("Jennifer");
p1.falar();
const p2 = new Pessoa("Ivone");
p2.falar();

const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p3 = criarPessoa("João");
p3.falar();
