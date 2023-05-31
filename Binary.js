function binarySearch(arr, t) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === t) return mid;
    if (arr[mid] > t) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
}

let arr = [-2, 0, 3, 6, 8, 10];

console.log(binarySearch(arr, 3)); //2
console.log(binarySearch(arr, 8)); //4
console.log(binarySearch(arr, 10)); //5
