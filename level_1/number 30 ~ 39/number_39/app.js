function solution(N, stages) {
  const map = {};
  const failed = [];
  let result = [];
  let countOfStage = stages.length;

  for (let i = 1; i < N + 1; i++) {
    map[i] = 0;
  }

  stages.forEach((item) => {
    if (map[item] != undefined) {
      map[item]++;
    }
  });

  const value = Object.values(map);
  value.forEach((item) => {
    failed.push(item / countOfStage);
    countOfStage -= item;
  });

  result = failed
    .map((failed, i) => ({ failed, i }))
    .sort((a, b) => b.failed - a.failed)
    .map(({ i }) => i + 1);

  return result;
}
