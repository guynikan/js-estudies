const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);
  },
};

pessoa.falar();
const falar = pessoa.falar;

falar(); //conflito entre paradigmas OO e Funcional

// com o Bind, sempre que eu chamar a falarDePessoa, ele vai utilizar o pessoa como contexto (mandando no this)
const falarDePessoa = pessoa.falar.bind(pessoa);

falarDePessoa();
