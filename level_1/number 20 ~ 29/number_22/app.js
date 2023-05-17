function solution(n) {
  let arr = devisor(n);
  return arr.reduce((acc, item) => (acc += item), 0);
}

function devisor(num) {
  if (num === 1) {
    return [1];
  }
  let result = new Set();
  for (let i = 1; i < Math.sqrt(num) + 1; i++) {
    if (num % i === 0) {
      result.add(i);
      if (num / i != 0) {
        result.add(num / i);
      }
    }
  }

  return [...result];
}
