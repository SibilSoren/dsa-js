const topKFrequent = function (nums, k) {
  let map = new Map();

  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  let buckets = Array(nums.length + 1)
    .fill(null)
    .map(() => []);

  for (let [key, freq] of map.entries()) {
    buckets[freq].push(key);
  }

  let result = [];

  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    for (const num of buckets[i]) {
      result.push(num);
      if (result.length === k) break;
    }
  }

  return result;
};

// let nums = [1, 1, 1, 2, 2, 3];
let nums = [2, 3, 4, 1, 4, 0, 4, -1, -2, -1];
let k = 2;

console.log(topKFrequent(nums, k));
