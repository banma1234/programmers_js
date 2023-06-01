// 개선판
function betterSolution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach(type => type.split("").forEach(char => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}

// 처음 제출했었던 코드...
function solution(survey, choices) {
  let result = "";
  const compareSheet = {
    R: 0,
    T: 0,
    C: 1,
    F: 1,
    J: 2,
    M: 2,
    A: 3,
    N: 3,
  };
  const myMBTI = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  survey.forEach((item, i) => {
    let target = item.split("");
    let givenScore = 4 - choices[i];

    if (givenScore > 0) {
      myMBTI[compareSheet[target[0]]][target[0]] += givenScore;
    } else if (givenScore < 0) {
      myMBTI[compareSheet[target[1]]][target[1]] += Math.abs(givenScore);
    }
  });

  myMBTI.forEach((item, i) => {
    let target = Object.entries(item).sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0] - b[0];
      } else {
        return b[1] - a[1];
      }
    });

    result += target[0][0];
  });

  return result;
}
