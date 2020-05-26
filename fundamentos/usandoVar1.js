{
  {
    {
      {
        var sera = "Sera";
      }
    }
  }
}

console.log(sera);

function teste() {
  // para variaveis declaradas dentro de funções, o escopo é válido
  var local = 123;
}

teste();

console.log(local); //local is not defined
