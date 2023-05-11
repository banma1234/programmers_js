function solution(k, score) {
  var answer = [score[0]];
  let hallOfFame = [score[0]];
  for (let i = 1; i < score.length; i++) {
    let minScore = hallOfFame[hallOfFame.length - 1];
    // if length of hallOfFame > k-1
    if (hallOfFame.length > k - 1) {
      //   if minimum of hallOfFame < score[i]
      if (minScore < score[i]) {
        //    hallOfFame.pop()
        hallOfFame.pop();
        //    push score[i] at hallOfFame
        hallOfFame.push(score[i]);
      }
    } else {
      hallOfFame.push(score[i]);
    }
    hallOfFame.sort((a, b) => {
      return b - a;
    });
    // push minimum of hallOfFame at answer
    answer.push(hallOfFame[hallOfFame.length - 1]);
  }

  return answer;
}
