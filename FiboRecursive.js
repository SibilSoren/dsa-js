function fiboRecursive(n) {
  if (n < 2) {
    return n;
  }
  //   console.log(fiboRecursive(n - 1) + fiboRecursive(n - 2));
  return fiboRecursive(n - 1) + fiboRecursive(n - 2);
}

console.log(fiboRecursive(6));

// [0,1,1,2,3,5,8]
// f(n) = f(n - 1) + f(n - 2)
//Time complexity O(2^n)
