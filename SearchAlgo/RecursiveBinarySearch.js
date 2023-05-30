function recursiveBinarySearch(arr, t) {
  return searchB(arr, t, 0, arr.length - 1);
}

function searchB(arr, t, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === t) return mid;
  if (arr[mid] > t) {
    return searchB(arr, t, start, mid - 1);
  } else {
    return searchB(arr, t, mid + 1, end);
  }
}

let arr = [-1, 2, 7, 9, 13, 18];

console.log(recursiveBinarySearch(arr, 9)); //3
console.log(recursiveBinarySearch(arr, 2)); //1
console.log(recursiveBinarySearch(arr, 18)); //5
console.log(recursiveBinarySearch(arr, 5)); //-1

//Time complexity O(logn)
