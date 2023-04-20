function solution(s) {
  let answer = false;
  let temp = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      stack.push(s[i]);
    } else {
      temp = stack[stack.length - 1] + s[i];
      if (temp == "()") {
        stack.pop();
      } else {
        // s[i]를 push하는게 깔끔하지만 배열탐색에 시간이 할당되어 시간초과가 발생한다.
        stack.push(s);
      }
    }
  }
  // 0은 false로도 간주되기에 해당 코드는 유효하다.
  // stack.length == 0 를 조건으로 사용할 경우 시간초과가 발생한다.
  if (!stack.length) {
    answer = true;
  }
  return answer;
}
