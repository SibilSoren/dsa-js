const characterReplacement = function (s, k) {
  let count = new Map();
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    let ch = s[right];

    count.set(ch, (count.get(ch) || 0) + 1);

    maxFreq = Math.max(maxFreq, count.get(ch));

    while (right - left + 1 - maxFreq > k) {
      const leftChar = s[left];
      count.set(leftChar, count.get(leftChar) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};

let s = "ABAB";
console.log(characterReplacement(s));
