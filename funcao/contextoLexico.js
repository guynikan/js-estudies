const valor = "Global";

// uma função tem consciencia de onde ela foi definida, por tanto, por mais que eu chame
// minhaFuncao em outro contexto, ela irá pegar o valor de 'Global', pois é ele que está próximo
// ao seu escopo de declaração
function minhaFuncao() {
  console.log(valor);
}

minhaFuncao();

function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();
