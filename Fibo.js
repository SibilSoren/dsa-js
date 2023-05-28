function fiboSeries(n) {
  let arr = [0, 1];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  for (let i = 2; i < n; i++) {
    let ans = arr[i - 1] + arr[i - 2];
    arr.push(ans);
  }
  return arr;
}

console.log(fiboSeries(8));
