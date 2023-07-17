function solution(nums) {
  const map = {};

  nums.forEach(item => {
    map[item] ? (map[item] += 1) : (map[item] = 1);
  });

  return Math.min(Object.keys(map).length, nums.length / 2);
}
