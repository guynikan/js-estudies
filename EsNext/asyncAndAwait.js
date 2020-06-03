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

// recurso do ES8
// simplificar o uso de promises...

// só funciona se no nome da função eu adicionar o marcador async
let obterAlunos = async () => {
  // só vai pro próximo passo, se estiver resolvida ou rejeitada
  const turmaA = await getTurma("A");
  const turmaB = await getTurma("B");
  const turmaC = await getTurma("C");
  return [].concat(turmaA, turmaB, turmaC);
}; // retorna um objeto asyncFunction

// então eu chamo a função async passando o then
obterAlunos()
  // o then recebe uma callback, tendo como parametro o resultado (oque foi retornado em resolve)
  // aqui no caso, a callback recebe a lista de alunos, executa um map, que recebe a lista de alunos e retorna
  // apenas o nome (atributo do objeto)
  .then((alunos) => alunos.map((a) => a.nome))
  // após isso é chamada a then dnv, passando agora por parametro o retorno da callback anterior (os nomes)
  // então ela retorna o console.log com os nomes
  .then((nomes) => console.log(nomes));
