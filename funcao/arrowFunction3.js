let comparaComThis = function (param) {
  console.log(this === param);
};

// dentro da função normal, o this aponta pro global
function testeContexto(param) {
  console.log(this === param);
}

testeContexto(global);

// em uma arrow Function, o this aponta pro module.exports
testeContextoArrow = (param) => console.log(this === param);

testeContextoArrow(module.exports);
