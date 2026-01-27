# DSA Pattern Reference

Quick reference for the most common interview patterns with invariants, when to recognize them, and template approaches.

---

## Two Pointers

### Opposite Direction (Squeeze)

**When to Use**: Sorted array, finding pairs, optimization problems

**Key Invariant**: The answer lies between the pointers; moving one pointer never skips the optimal answer

**Template**:
```javascript
let left = 0, right = arr.length - 1;
while (left < right) {
  // Calculate current state
  if (condition) {
    left++;
  } else {
    right--;
  }
}
```

**Problems Solved**:
- Two Sum II (sorted)
- Container With Most Water
- 3Sum
- Trapping Rain Water

---

### Same Direction (Fast/Slow)

**When to Use**: In-place modification, cycle detection, linked list problems

**Key Invariant**: Left pointer = processed region, right pointer = exploration

**Template**:
```javascript
let slow = 0;
for (let fast = 0; fast < arr.length; fast++) {
  if (condition) {
    arr[slow] = arr[fast];
    slow++;
  }
}
```

**Problems Solved**:
- Move Zeroes
- Remove Duplicates from Sorted Array

---

## Sliding Window

### Variable Size

**When to Use**: Longest/shortest subarray with constraint

**Key Invariant**: Window always maintains valid constraint

**Template**:
```javascript
let left = 0, result = 0;
const window = new Map(); // or other state

for (let right = 0; right < arr.length; right++) {
  // Expand: add arr[right] to window
  
  while (/* window invalid */) {
    // Shrink: remove arr[left] from window
    left++;
  }
  
  result = Math.max(result, right - left + 1);
}
```

**Problems Solved**:
- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement

---

### Fixed Size

**When to Use**: Subarray of exact size K

**Key Invariant**: Window always contains exactly K elements

**Template**:
```javascript
let windowSum = 0;
for (let i = 0; i < k; i++) windowSum += arr[i];
let result = windowSum;

for (let i = k; i < arr.length; i++) {
  windowSum += arr[i] - arr[i - k];
  result = Math.max(result, windowSum);
}
```

---

## Stack

### Monotonic Stack

**When to Use**: Next greater/smaller element, histogram problems

**Key Invariant**: Stack maintains monotonically increasing/decreasing elements

**Template (Next Greater)**:
```javascript
const result = new Array(arr.length).fill(-1);
const stack = []; // stores indices

for (let i = 0; i < arr.length; i++) {
  while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
    const idx = stack.pop();
    result[idx] = arr[i]; // or i - idx for distance
  }
  stack.push(i);
}
```

**Problems Solved**:
- Daily Temperatures
- Trapping Rain Water (alternative approach)

---

### Matching/Parsing

**When to Use**: Parentheses matching, expression evaluation

**Key Invariant**: Stack tracks unmatched openers

**Template**:
```javascript
const stack = [];
const pairs = { ')': '(', ']': '[', '}': '{' };

for (const char of s) {
  if (char in pairs) {
    if (stack.pop() !== pairs[char]) return false;
  } else {
    stack.push(char);
  }
}
return stack.length === 0;
```

**Problems Solved**:
- Valid Parentheses
- Evaluate Reverse Polish Notation

---

## Hashing

### Frequency Map

**When to Use**: Counting, anagrams, finding duplicates

**Key Invariant**: Map tracks exact frequency of each element

**Template**:
```javascript
const freq = new Map();
for (const item of arr) {
  freq.set(item, (freq.get(item) || 0) + 1);
}
```

**Problems Solved**:
- Group Anagrams
- Valid Anagram
- Contains Duplicate

---

### Seen Set / Lookup

**When to Use**: O(1) existence check, find complement

**Key Invariant**: Set contains all previously seen elements

**Template**:
```javascript
const seen = new Set();
for (const num of arr) {
  if (seen.has(target - num)) return true;
  seen.add(num);
}
```

**Problems Solved**:
- Two Sum

---

## Prefix Sum / Product

**When to Use**: Range queries, cumulative calculations

**Key Invariant**: `prefix[i]` = aggregate of elements from 0 to i-1

**Template**:
```javascript
const prefix = [1];
for (let i = 0; i < arr.length; i++) {
  prefix.push(prefix[i] * arr[i]);
}
// prefix[j] - prefix[i] = sum from i to j-1
```

**Problems Solved**:
- Product of Array Except Self

---

## Kadane's Algorithm

**When to Use**: Maximum subarray sum

**Key Invariant**: `currentSum` = max sum ending at current position

**Template**:
```javascript
let maxSum = arr[0], currentSum = arr[0];
for (let i = 1; i < arr.length; i++) {
  currentSum = Math.max(arr[i], currentSum + arr[i]);
  maxSum = Math.max(maxSum, currentSum);
}
```

**The Decision**: At each element, decide to extend the previous subarray or start fresh

**Problems Solved**:
- Maximum Subarray
- Maximum Product Subarray (variation)

---

## Binary Search

### Standard

**When to Use**: Sorted array, find target

**Key Invariant**: Search space halves each iteration; answer is always in [left, right]

**Template**:
```javascript
let left = 0, right = arr.length - 1;
while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) left = mid + 1;
  else right = mid - 1;
}
return -1;
```

---

### Binary Search on Answer

**When to Use**: Optimization problems with monotonic feasibility

**Key Invariant**: There exists a threshold where all values before/after work

**Template**:
```javascript
let left = minPossible, right = maxPossible;
while (left < right) {
  const mid = Math.floor((left + right) / 2);
  if (isValid(mid)) right = mid;
  else left = mid + 1;
}
return left;
```

---

## Dynamic Programming

### 1D DP

**When to Use**: Decision at each step depends only on previous state

**Template**:
```javascript
const dp = new Array(n).fill(0);
dp[0] = baseCase;
for (let i = 1; i < n; i++) {
  dp[i] = /* recurrence using dp[i-1] or dp[i-2] etc */;
}
```

---

### 2D DP

**When to Use**: Grid problems, string matching, subset problems

**Template**:
```javascript
const dp = Array.from({length: m}, () => Array(n).fill(0));
// Fill base cases
for (let i = 1; i < m; i++) {
  for (let j = 1; j < n; j++) {
    dp[i][j] = /* recurrence */;
  }
}
```

---

## Quick Pattern Recognition

| Signal | Pattern |
|--------|---------|
| "Sorted array" | Two Pointers or Binary Search |
| "Subarray/substring" | Sliding Window |
| "Next greater/smaller" | Monotonic Stack |
| "Pairs with sum" | Hashing or Two Pointers |
| "Maximum/minimum subarray" | Kadane's or DP |
| "Range sum/product" | Prefix Sum |
| "Optimal choice at each step" | Greedy or DP |
| "All possibilities" | Backtracking or DP |
| "Shortest path" | BFS |
| "Connected components" | DFS or Union-Find |
