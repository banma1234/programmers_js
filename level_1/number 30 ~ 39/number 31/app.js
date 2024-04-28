function betterSolution(park, routes) {
  const dirs = { E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0] };
  let [x, y] = [0, 0];
  for (let i = 0; i < park.length; i++) {
    if (park[i].includes("S")) {
      [x, y] = [i, park[i].indexOf("S")];
      break;
    }
  }

  routes.forEach((route) => {
    const [r, n] = route.split(" ");
    let [nx, ny] = [x, y];
    let cnt = 0;
    while (cnt < n) {
      [nx, ny] = [nx + dirs[r][0], ny + dirs[r][1]];
      if (!park[nx] || !park[nx][ny] || park[nx][ny] === "X") break;
      cnt++;
    }
    if (cnt == n) [x, y] = [nx, ny];
  });
  return [x, y];
}

function solution(park, routes) {
  let parkMap = {
    current: [],
    size: [park[0].length - 1, park.length - 1],
  };

  park.forEach((item, row) => {
    if (item.includes("S")) {
      parkMap.current = [row, item.indexOf("S")];
    }
  });

  routes.forEach((order) => {
    let flag = true;
    const [direction, distance] = order.split(" ");
    let [tmpY, tmpX] = parkMap.current;

    for (let i = 0; i < parseInt(distance); i++) {
      switch (direction) {
        case "E":
          tmpX++;
          break;
        case "W":
          tmpX--;
          break;
        case "S":
          tmpY++;
          break;
        case "N":
          tmpY--;
          break;
      }

      if (
        (tmpX > parkMap.size[0]) |
        (tmpX < 0) |
        (tmpY > parkMap.size[1]) |
        (tmpY < 0) |
        (park[tmpY][tmpX] === "X")
      ) {
        flag = false;
        break;
      }
    }

    if (flag) {
      parkMap.current = [tmpY, tmpX];
    }
  });

  return parkMap.current;
}
