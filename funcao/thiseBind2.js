function Pessoa() {
  this.idade = 0;

  // aqui o this é a propria função Pessoa
  setInterval(
    function () {
      // aqui dentro, o this n tem uma definição pra idade
      this.idade++;
      console.log(this);
      console.log(this.idade);
      // mas se eu passo o this para o bind da função que eu quero que tenha o this, ele passa a ter
    }.bind(this),
    1000
  );
}

new Pessoa();
