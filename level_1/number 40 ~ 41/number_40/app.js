function solution(a, b) {
  let result = "";
  let sum = 0;
  const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const WEEK = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

  for (const i = 1; i < a; i++) {
    sum += MONTH[i - 1];
  }
  result = WEEK[(sum + b - 1) % 7];

  return result;
}
