function solution(k, tangerine) {
  let answer = 0;
  let tangerineCounter = {};
  tangerine.forEach(item => {
    tangerineCounter[item]
      ? (tangerineCounter[item] += 1)
      : (tangerineCounter[item] = 1);
  });

  let sum = 0;
  let kindOfTangerine = Object.values(tangerineCounter).sort((a, b) => b - a);
  for (item of kindOfTangerine) {
    if (sum >= k) {
      break;
    }
    answer++;
    sum += item;
  }

  return answer;
}
