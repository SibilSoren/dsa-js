function insertionSort(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    let numToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numToInsert) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = numToInsert;
  }

  return arr;
}

let arr = [3, 2, -1, 0, -4, 33, -20, 45];

console.log(insertionSort(arr));
