// https://leetcode.com/problems/valid-anagram/description/
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");
  return sortedS === sortedT;
};
