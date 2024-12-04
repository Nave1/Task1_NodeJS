const num = 123;

// changing boolian to number
const divisibleBy2 = Number(num % 2 === 0);
const divisibleBy3 = Number(num % 3 === 0);
const divisibleBy5 = Number(num % 5 === 0);

// calculating amount of existing conditions
const count = divisibleBy2 + divisibleBy3 + divisibleBy5;

// printing solution
console.log(count);
