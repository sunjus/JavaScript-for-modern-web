function repeatStringNumTimes(str, num) {
  let ret = "";
  if (num < 1) {
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      ret += str;
    }
  }
  return ret;
}

repeatStringNumTimes("abc", 3);
