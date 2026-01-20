const productExceptSelf = function (nums) {
  let n = nums.length;
  let prefixArr = [];
  prefixArr[0] = 1;
  for (let i = 1; i < n; i++) {
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  let suffixArr = [];
  suffixArr[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffixArr[i] = suffixArr[i + 1] * nums[i + 1];
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result[i] = prefixArr[i] * suffixArr[i];
  }

  return result;
};

let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
