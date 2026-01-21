const isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const isAlphanumeric = function (ch) {
  return (
    (ch >= "a" && ch <= "z") ||
    (ch >= "A" && ch <= "Z") ||
    (ch >= "0" && ch <= "9")
  );
};

// let s = "A man, a plan, a canal: Panama";
let s = "race a car";

console.log(isPalindrome(s));
