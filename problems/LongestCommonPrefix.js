// https://leetcode.com/problems/longest-common-prefix/description/
const longestCommonPrefix = function (strs) {
  const n = strs.length;
  if (n === 0) return "";
  let shortestStr = strs[0];
  for (const str of strs) {
    if (str.length < shortestStr.length) {
      shortestStr = str;
    }
  }

  for (let i = 0; i < shortestStr.length; i += 1) {
    const ch = shortestStr[i];
    for (const str of strs) {
      if (str[i] !== ch) {
        return shortestStr.slice(0, i);
      }
    }
  }

  return shortestStr;
};

const strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
