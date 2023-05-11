function solution(a, b) {
  return a.reduce((sum, _, i) => (sum += a[i] * b[i]), 0);
}
