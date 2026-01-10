// https://leetcode.com/problems/maximum-subarray/
const maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSum = -Infinity;
  let currentSum = -Infinity;
  for (let i = 0; i < nums.length; i += 1) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
