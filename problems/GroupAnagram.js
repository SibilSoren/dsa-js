const groupAnagrams = function (strs) {
  //   let result = [];
  let map = new Map();
  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (map.has(sortedStr)) {
      let value = map.get(sortedStr);
      value.push(str);
      map.set(sortedStr, value);
    } else {
      map.set(sortedStr, [str]);
    }
  }

  return Array.from(map.values());
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
