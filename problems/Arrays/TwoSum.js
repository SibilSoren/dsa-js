// https://leetcode.com/problems/two-sum/
const twoSum = function (nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i += 1) {
    let diff = target - nums[i];
    if (map[diff] !== undefined) {
      return [i, map[diff]];
    } else {
      map[nums[i]] = i;
    }
  }
};
