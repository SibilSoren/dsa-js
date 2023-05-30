function linearSearch(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === t) {
      return i;
    }
  }

  return -1;
}

let arr = [2, 5, 4, -2, 8, 1];

console.log(linearSearch(arr, 7)); //-1
console.log(linearSearch(arr, 4)); //2
console.log(linearSearch(arr, 1)); //5

//Time complexity O(n)
