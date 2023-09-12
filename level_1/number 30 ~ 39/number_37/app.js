function solution(answers) {
  const result = [];
  const count = [0, 0, 0];
  const users = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  answers.forEach((target, i) => {
    if (users[0][i % 5] === target) {
      count[0]++;
    }
    if (users[1][i % 8] === target) {
      count[1]++;
    }
    if (users[2][i % 10] === target) {
      count[2]++;
    }
  });

  const max = Math.max(count[0], count[1], count[2]);
  count.forEach((item, i) => {
    if (item === max) {
      result.push(i + 1);
    }
  });

  return result;
}
