// array em js é um objeto
console.log(typeof new Array(), typeof []);

let aprovados = new Array("Bia", "Carlos", "Ana");

console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];

console.log(aprovados[0]);
console.log(aprovados.length);

aprovados.sort(); // altera o array original
console.log(aprovados);

aprovados.push("Adiciona um novo elemento"); // na ultima posição
//delete aprovados[1]; // deleta mas não reordena

aprovados.splice(1, 2); // exclui um determinado elemento de um indice
aprovados.splice(1, 0, "Elemento1"); //adiciona um determinado elemento de um indice
console.log(aprovados);
