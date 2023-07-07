function solution(dartResult) {
  let answer = [];

  const score = dartResult.match(/\d{1,2}/g);
  const bonus = dartResult.split(/\d{1,2}/g);
  bonus.shift();

  for (let i = 0; i < 3; i++) {
    let [multiple, option] = bonus[i].split("");
    answer.push(score[i]);

    switch (multiple) {
      case "D":
        answer[i] **= 2;
        break;
      case "T":
        answer[i] **= 3;
        break;
    }

    if (option) {
      switch (option) {
        case "*":
          answer[i] *= 2;
          if (i > 0) answer[i - 1] *= 2;
          break;
        case "#":
          answer[i] *= -1;
          break;
      }
    }
  }

  return answer.reduce((sum, _) => sum + _, 0);
}
