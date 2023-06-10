function solution(wallpaper) {
  let x = [];
  let y = [];
  wallpaper.forEach((row, indexOfRow) => {
    row = row.split("");
    row.forEach((item, i) => {
      if (item === "#") {
        x.push(i);
        y.push(indexOfRow);
      }
    });
  });

  minX = Math.min(...x);
  minY = Math.min(...y);
  maxX = Math.max(...x);
  maxY = Math.max(...y);

  return [minY, minX, maxY + 1, maxX + 1];
}
