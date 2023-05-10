function solution(k, m, score) {
  var answer = 0;
  score.sort((a, b) => {
    return b - a;
  });

  let target = 0;
  let min = 0;
  while (target <= score.length) {
    let storedBox = score.slice(target, target + m);
    target += m;

    if (storedBox.length === m) {
      for (let i = 0; i < storedBox.length - 1; i++) {
        min = Math.min(storedBox[i], storedBox[i + 1]);
      }
      if (min > k) {
        min = k;
      }
      answer += min * m;
    }
  }

  return answer;
}
