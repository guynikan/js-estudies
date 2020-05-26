// calculadora simples
function calculadora(x, y, operador) {
  switch (operador) {
    case "soma":
      resultado = x + y;
      break;
    case "sub":
      resultado = x - y;

      break;
    case "multi":
      resultado = x * y;
      break;
    case "div":
      resultado = x / y;
      break;

    default:
      resultado = x + y;
      break;
  }

  return resultado;
}

console.log(calculadora(10, 20, "soma"));
console.log(calculadora(10, 20, "sub"));
console.log(calculadora(10, 20, "multi"));
console.log(calculadora(10, 20, "div"));
