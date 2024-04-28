// 개선된 solution
function betterSolution(X, Y) {
  const mapOfX = {};
  let result = "";

  for (const item of X) {
    mapOfX[item] = (mapOfX[item] || 0) + 1;
  }

  for (const item of Y) {
    if (!mapOfX[item]) continue;
    result += item;
    mapOfX[item]--;
  }

  if (result === "") return "-1";
  if (Number(result) === 0) return "0";
  return [...result]
    .map((e) => Number(e))
    .sort((a, b) => b - a)
    .join("");
}

// 최초로 작성한 solution
function solution(X, Y) {
  let mapOfX = {};
  let mapOfY = {};
  let result = [];

  X.split("").forEach((item) => {
    mapOfX[item] ? (mapOfX[item] += 1) : (mapOfX[item] = 1);
  });
  Y.split("").forEach((item) => {
    mapOfY[item] ? (mapOfY[item] += 1) : (mapOfY[item] = 1);
  });

  Object.keys(mapOfY).forEach((item) => {
    if (mapOfX[item]) {
      let min = Math.min(mapOfX[item], mapOfY[item]);
      for (let i = 0; i < min; i++) {
        result.push(item);
      }
    }
  });

  if (result.length === 0) {
    return "-1";
  } else {
    result = result.sort((a, b) => b - a).join("");
    return Number(result) > 0 ? result : "0";
  }
}
