let dobro = function (a) {
  return a * 2;
};

dobro = (a) => {
  return a * 2;
};

// função arrow de uma unica linha, pode-se esconder o return
dobro = (a) => a * 2;

console.log(dobro(2));
