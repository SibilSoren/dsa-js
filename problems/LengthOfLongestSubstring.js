const lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let left = 0;
  let maxLen = 0;
  for (let right = 0; right < s.length; right++) {
    let ch = s[right];
    if (map.has(ch)) {
      left = Math.max(left, map.get(ch) + 1);
    }
    map.set(ch, right);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
};

// let s = "abcabcbb";
// let s = "bbbbb";
let s = "pwwkew";
// let s = "dvdf";
console.log(lengthOfLongestSubstring(s));
