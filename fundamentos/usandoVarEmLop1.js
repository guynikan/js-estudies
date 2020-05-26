for (var y = 0; y < 10; y++) {
  console.log(y);
}

console.log("fora do escopo de bloco", y);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("fora do escopo de bloco com let", i); // dá erro. i is not defined
