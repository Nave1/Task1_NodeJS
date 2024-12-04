const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 0]; // מערך לדוגמה

// חישוב כמות האפסים
const zeroCount = numbers.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);

console.log(`Amount of zeros in the array: ${zeroCount}`);
