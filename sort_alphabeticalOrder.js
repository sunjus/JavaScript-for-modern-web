function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
  });
}

function reverseAlpha(arr) {
  return arr.sort(function (a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
