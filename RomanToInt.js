var romanToInt = function (s) {
  const Roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  Object.freeze(Roman);
  let arr = s.split('');
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < arr.length) {
      let nextChar = arr[i + 1];
      if (Roman[s[i]] >= Roman[nextChar]) {
        result = result + Roman[arr[i]];

      } else {
        result = result + Roman[nextChar] - Roman[arr[i]];
        i++;

      }
    } else {
      result = result + Roman[arr[i]];
    }
  }
  return result;
};
