function powerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n /= 2;
  }
  return true;
}

console.log(powerOfTwo(1));
console.log(powerOfTwo(2));
console.log(powerOfTwo(5));
// Time complexity O(logn)

function powerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}

console.log(powerOfTwoBitwise(1));
console.log(powerOfTwoBitwise(2));
console.log(powerOfTwoBitwise(5));

//Time complexity O(1)
