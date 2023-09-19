function solution(n, words) {
  let count = 1;
  let result = [0, 0];
  let endPoint = words[0].at(0);

  for (let i = 0; i < words.length; i++) {
    let target = words[i];

    if (i && i % n === 0) count++;
    if ((endPoint != target[0]) | (words.indexOf(target) != i)) {
      result = [(i % n) + 1, count];
      break;
    }

    endPoint = target.substr(-1);
  }

  return result;
}
