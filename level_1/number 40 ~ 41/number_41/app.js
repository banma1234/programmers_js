function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    let parsedNum = (arr1[i] | arr2[i]).toString(2);
    if (parsedNum.length < n) {
      parsedNum = "0".repeat(n - parsedNum.length) + parsedNum;
    }

    parsedNum = parsedNum.replace(/1/g, "#").replace(/0/g, " ");

    result.push(parsedNum);
  }

  return result;
}
