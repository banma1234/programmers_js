function solution(numbers) {
  const set = new Set();
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      sum = numbers[i] + numbers[j];
      set.add(sum);
    }
  }

  return [...set].sort((a, b) => {
    return a - b;
  });
}
