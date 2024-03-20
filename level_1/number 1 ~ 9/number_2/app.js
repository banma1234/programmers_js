function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.forEach(item => {
    item.sort((x, y) => {
      return y - x;
    });
    if (maxW <= item[0]) maxW = item[0];
    if (maxH <= item[1]) maxH = item[1];
  });
  return maxW * maxH;
}
