const maxNumber = 237;

// פונקציה שבודקת אם מספר הוא ראשוני
const isPrime = (num) => {
  const divisors = Array.from({ length: num - 2 }, (_, i) => i + 2);
  const hasDivisor = divisors.some(divisor => num % divisor === 0);
  return Number(num > 1) * Number(hasDivisor === false);
};

// יצירת רשימת מספרים ראשוניים
const primes = Array.from({ length: maxNumber - 1 }, (_, i) => i + 2)
  .filter(isPrime);

// הדפסת התוצאה
console.log(primes.join(", "));
