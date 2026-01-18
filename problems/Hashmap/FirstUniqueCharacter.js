var firstUniqChar = function (s) {
  const charCount = {};
  for (let ch of s) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }

  for (let i = 0; i < s.length; i++) {
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};

// let s = "loveleetcode";
let s = "aabb";
console.log(firstUniqChar(s));
