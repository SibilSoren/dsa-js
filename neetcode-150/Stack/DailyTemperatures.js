const dailyTemperatures = function (temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = []; // stores indices

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop();
      result[prevIndex] = i - prevIndex;
    }

    stack.push(i);
  }

  return result;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73, 78, 77, 79];
console.log(dailyTemperatures(temperatures));
