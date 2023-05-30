function binarySearch(arr, t) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < t) {
      start = mid + 1;
    } else if (arr[mid] > t) {
      end = mid - 1;
    } else if (arr[mid] === t) {
      return mid;
    }
  }

  return -1;
}

let arr = [-1, 2, 7, 9, 13, 18];

console.log(binarySearch(arr, 9)); //3
console.log(binarySearch(arr, 2)); //1
console.log(binarySearch(arr, 18)); //5
console.log(binarySearch(arr, 5)); //-1

//Time complexity O(logn)
