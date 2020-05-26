let num1 = 1;
let num2 = 2;

num1++;
console.log(num1);

// maior precedencia -
--num1;
console.log(num1);

// prefix é executado antes da comparação
// posfix é executado depois da comparação
// usa isso n men
console.log(++num1 === num2--);
