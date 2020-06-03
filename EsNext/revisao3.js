// ES8: Object.values/ Object.entries

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.values(obj));
console.log(Object.entries(obj));

//  Melhorias na notação literal

const nome = "Carla";

const obj2 = {
  nome,
  ola() {
    return "Salve!";
  },
};

console.log(obj2.nome, obj2.ola());
