function findLongestWordLength(str) {
  let max_value = 0;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max_value) {
      max_value = arr[i].length;
    }
  }
  return max_value;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
