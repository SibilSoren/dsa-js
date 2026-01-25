const isValid = function (s) {
  const stack = [];

  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const ch of s) {
    // opening bracket
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(ch);
    }
    // closing bracket
    else {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

let s = "()[]{}";

console.log(isValid(s));
