function recurseBinary(arr, t) {
  return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, start, end) {
  if (start > end) return -1;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === t) return mid;
  if (arr[mid] > t) {
    return search(arr, t, start, mid - 1);
  } else {
    return search(arr, t, mid + 1, end);
  }
}

let arr = [-2, 0, 3, 6, 8, 10];

console.log(recurseBinary(arr, 3)); //2
console.log(recurseBinary(arr, 8)); //4
console.log(recurseBinary(arr, 10)); //5
