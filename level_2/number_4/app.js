function solution(topping) {
  if (topping.length === 1) {
    return 0;
  }

  const older = {};
  const younger = {};
  let oldCount = 0;
  let youngCount = 0;

  let count = 0;

  topping.forEach((item) => {
    if (older[item]) {
      older[item]++;
    } else {
      older[item] = 1;
      oldCount++;
    }
  });

  topping.forEach((item) => {
    if (older[item] - 1 === 0) {
      oldCount--;
      delete older[item];
    } else {
      older[item]--;
    }

    if (younger[item]) {
      younger[item]++;
    } else {
      younger[item] = 1;
      youngCount++;
    }

    if (youngCount === oldCount) count++;
  });

  return count;
}
