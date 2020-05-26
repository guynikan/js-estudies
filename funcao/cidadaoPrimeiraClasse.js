// função em JS é First-Class
// função é dado

// forma literal
function func1() {}

console.log(func1());
//  uma função sempre retorna algo, nem que seja undefined

// é possível armazenar uma função numa variável
const func2 = function () {};

console.log(func2());

// é possível armanezar uma função num array
const array = [
  function (a, b) {
    return a + b;
  },
  func1,
  func2,
];

console.log(array[0](2, 3));

// é possível armazenar uma função em um atributo de objeto
const obj = {};
obj.falar = function () {
  return "Opre";
};

console.log(obj.falar());

// é possível passar uma função por param
function run(fun) {
  fun();
}

run(function () {
  console.log("Se liga");
});

// uma função pode retornar/conter uma função
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

// chamada é estranhona
soma(2, 3)(5);
