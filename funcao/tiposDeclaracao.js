// funcoes em js sao carregadas primeiro. isso quer dizer q eu consigo chamar uma função antes de sua declaração
// porém, isso n serve pra quando a função é alocada em uma var/const

// function declaration
function soma(x, y) {
  return x + y;
}

// function expression
const sub = function (x, y) {
  return x - y;
};

//named function expression - pouco usada, ganho no stacktrace
const mult = function mult(x, y) {
  return x * y;
};
