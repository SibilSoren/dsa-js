function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (j === arr.length - 1) break;
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log(arr);
  }
  return arr;
}

let arr = [3, 2, -1, 0, -4, 33, -20, 45];

console.log(bubbleSort(arr));
