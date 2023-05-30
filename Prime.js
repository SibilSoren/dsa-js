function isPrime(n) {
  let result = true;
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return result;
}

console.log(isPrime(1));

// Time Complexity O(sqrt(n))
