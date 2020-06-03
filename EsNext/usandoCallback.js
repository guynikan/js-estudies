const http = require("http");

const getTurma = (letra, callback) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;
  // chama a função get, passando a url e uma função callback que recebe como parâmetro a resposta (res)
  http.get(url, (res) => {
    let resultado = "";

    // intercepta o evento de resposta chamado data
    // e a cada dado que chega (no evento data de resposta) concatena a variável resultado
    res.on("data", (dados) => {
      resultado += dados;
    });

    // depois que todos os dados chegarem (n houver mais evento data)
    // intercepta o evento de resposta chamado end
    // passa pra callback o resultado (a concatenação dos dados) parseado de JSON para objeto
    res.on("end", () => {
      callback(JSON.parse(resultado));
    });
  });
};

let nomes = [];

// passo pra função getTurma a turma e a callback
getTurma("A", (alunos) => {
  // a callback recebe alunos (passada por parâmetro em res.on('end'))
  // concatena em nomes o resultado de uma função map que retorna uma template string com apenas o atributo nome
  // do objeto
  nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
  getTurma("B", (alunos) => {
    nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
    getTurma("C", (alunos) => {
      nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
      console.log(nomes);
    });
  });
});
