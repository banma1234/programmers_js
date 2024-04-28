function solution(lottos, win_nums) {
  let min = 0;
  const picked = lottos.filter((item) => item != 0);
  const win_nums_map = {};

  win_nums.forEach((item) => (win_nums_map[item] = true));
  picked.forEach((item) => {
    if (win_nums_map.hasOwnProperty(item)) {
      min++;
      delete win_nums_map[item];
    }
  });
  let max = min + (6 - picked.length);

  return [max ? 7 - max : 6, min ? 7 - min : 6];
}
