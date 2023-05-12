function solution(n, lost, reserve) {
  let target = lost
    .filter(item => {
      return !reserve.includes(item);
    })
    .sort((a, b) => {
      return a - b;
    });
  let cloth = reserve
    .filter(item => {
      return !lost.includes(item);
    })
    .sort((a, b) => {
      return a - b;
    });
  let count = target.length;

  for (item of cloth) {
    for (man of target) {
      if ((item - 1 === man) | (item + 1 === man)) {
        count--;
        target.splice(target.indexOf(man), 1);
      }
    }
  }

  return n - count;
}
