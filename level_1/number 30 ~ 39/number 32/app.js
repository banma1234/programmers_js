function solution(X, Y) {
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
    .map(e => Number(e))
    .sort((a, b) => b - a)
    .join("");
}
