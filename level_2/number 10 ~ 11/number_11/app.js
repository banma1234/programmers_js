function solution(clothes) {
  let result = 1;
  const map = {};

  for (const [_, type] of clothes) {
    map[type] ? map[type]++ : (map[type] = 1);
  }

  const values = Object.values(map);
  values.forEach(count => {
    result *= count + 1;
  });

  return result - 1;
}
