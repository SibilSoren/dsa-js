// https://leetcode.com/problems/move-zeroes/description/
const moveZeroes = function (nums) {
  const n = nums.length;
  let write = 0;
  for (let read = 0; read < n; i++) {
    if (nums[read] !== 0) {
      nums[write] = nums[read];
      write++;
    }
  }

  while (write < n) {
    nums[write] = 0;
    write++;
  }
};

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums);
