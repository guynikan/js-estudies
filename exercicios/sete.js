function bhaskara(ax2, bx, c) {
  let delta = Math.pow(bx, 2) - 4 * ax2 * c;
  let resultado = [];

  resultado.push("x1: " + (-bx + Math.sqrt(delta)) / (2 * ax2));
  resultado.push("x2: " + (-bx - Math.sqrt(delta)) / (2 * ax2));

  if (delta < 0) return "O delta é negativo";
  else return resultado;
}

console.log(bhaskara(2, 9, 7));
