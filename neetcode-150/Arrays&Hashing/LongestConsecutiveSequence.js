const longestConsecutive = function (nums) {
  let set = new Set(nums);
  let count = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentCount = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentCount++;
      }

      count = Math.max(currentCount, count);
    }
  }

  return count;
};
// let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
let nums = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(nums));
