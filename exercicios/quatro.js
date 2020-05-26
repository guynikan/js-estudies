function divisao(dividendo, divisor) {
  let divisao = dividendo / divisor;
  let resto = dividendo % divisor;

  return `O resultado da divisão é: ${divisao} e o resto é: ${resto}`;
}

console.log(divisao(10, 5));
console.log(divisao(15, 2));
