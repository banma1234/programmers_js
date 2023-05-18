function solution(s) {
  let answer = [];
  let indexCounter = {};

  for (let i = 0; i < s.length; i++) {
    if (indexCounter.hasOwnProperty(s[i])) {
      let temp = indexCounter[s[i]];
      answer.push(i - temp);
      indexCounter[s[i]] = i;
    } else {
      indexCounter[s[i]] = i;
      answer.push(-1);
    }
  }

  return answer;
}
