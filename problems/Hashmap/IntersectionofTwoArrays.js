const intersection = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const result = [];
  console.log(set1);
  // Iterate over smaller set
  if (set1.size > set2.size) {
    for (const val of set2) {
      if (set1.has(val)) result.push(val);
    }
  } else {
    for (const val of set1) {
      if (set2.has(val)) result.push(val);
    }
  }

  return result;
};

// let nums1 = [4, 9, 5];
// let nums2 = [9, 4, 9, 8, 4];
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];

console.log(intersection(nums1, nums2));
