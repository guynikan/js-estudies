function falarDepoisDe(segundos, frase) {
  // retorna uma promisse, que por sua vez executa uma função setTimout, passando pra resolve
  // a variável frase
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // aceita apenas um parâmetro
      resolve(frase);
    }, segundos * 1000);
  });
}

falarDepoisDe(3, "Toma")
  // para acessar uma promise é preciso chamar através do then (depois da chamada da função)
  .then((frase) => frase.concat("!!!"))

  // é possível concatenar funções na chamada de uma promisse
  .then((outraFrase) => console.log(outraFrase));
