function ehDivisivel(numero) {
  let resultado = numero % 3;

  if (resultado == 0) return true;
  else return false;
}

console.log(ehDivisivel(9));
console.log(ehDivisivel(5));
