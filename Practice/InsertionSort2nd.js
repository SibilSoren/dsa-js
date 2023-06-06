let arr = [3, 2, -1, 0, -4, 33, -20, 45];

function insertionSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));
