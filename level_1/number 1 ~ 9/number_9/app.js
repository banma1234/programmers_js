function solution(name, yearning, photo) {
  var answer = [];

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < name.length; j++) {
      if (photo[i].includes(name[j])) {
        sum += yearning[j];
      }
    }
    answer.push(sum);
  }
  return answer;
}

// name과 yearning을 객체로 매핑하여 photo와 비교하는 solution
function otherSolution(name, yearning, photo) {
    let answer = [];
    let score = {};
    name.forEach((item, i) => {
      score[item] = yearning[i];
    });
    for (let man of photo) {
      let sum = 0;
      man.forEach(item => {
        sum += score[item] ? score[item] : 0;
      });
      answer.push(sum);
    }
    return answer;
}