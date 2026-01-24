// const trap = function (height) {
//   let n = height.length;
//   const leftMaxArray = [];
//   let leftMax = 0;
//   for (let i = 0; i < n; i++) {
//     if (leftMax < height[i]) {
//       leftMax = height[i];
//     }
//     leftMaxArray[i] = leftMax;
//   }

//   let rightMaxArray = [];
//   let rightMax = 0;
//   for (let i = n - 1; i >= 0; i--) {
//     if (rightMax < height[i]) {
//       rightMax = height[i];
//     }
//     rightMaxArray[i] = rightMax;
//   }

//   let finalResult = [];
//   for (let i = 0; i < n; i++) {
//     finalResult[i] = Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i];
//   }
//   return finalResult.reduce((acc, item) => acc + item, 0);
// };

const trap = function (height) {
  const n = height.length;
  if (n === 0) return 0;

  let leftMax = new Array(n);
  let rightMax = new Array(n);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let water = 0;
  for (let i = 0; i < n; i++) {
    water += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return water;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// let height = [4, 2, 0, 3, 2, 5];
console.log(trap(height));
