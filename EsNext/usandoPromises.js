const http = require("http");

const getTurma = (letra) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

  // essa é a promise sendo retornada
  return new Promise((resolve, reject) => {
    // da um get na url e executa a callback res(resposta)
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
        try {
          // passa pra função resolve o JSON parseado
          resolve(JSON.parse(resultado));
        } catch (e) {
          reject(e);
        }
      });
    });
  });
};

// let nomes = [];

// // passo pra função getTurma a turma e a callback
// // then recebe o resultado de resolve e executa uma função
// getTurma("A").then((alunos) => {
//   // a callback recebe alunos (passada por parâmetro em res.on('end'))
//   // concatena em nomes o resultado de uma função map que retorna uma template string com apenas o atributo nome
//   // do objeto
//   nomes = nomes.concat(alunos.map((a) => `A: ${a.nome}`));
//   getTurma("B").then((alunos) => {
//     nomes = nomes.concat(alunos.map((a) => `B: ${a.nome}`));
//     getTurma("C").then((alunos) => {
//       nomes = nomes.concat(alunos.map((a) => `C: ${a.nome}`));
//       console.log(nomes);
//     });
//   });
// });

// all recebe um array de funções que retornam uma promisse
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
  // pra resolve, chama a callback que concatena o resultado de turmas (espalhado(spread)) em um array único
  .then((turmas) => [].concat(...turmas))
  .then((alunos) => alunos.map((aluno) => aluno.nome))
  .then((nomes) => console.log(nomes))
  // sempre colocar o catch (tratamento de erros) em uma promisse
  .catch((e) => console.log(e.message));
