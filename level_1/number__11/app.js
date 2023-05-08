function solution(s) {
  let result = 0;
  let head = s[0];
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === head) {
      stack.push(s[i]);
      if (i === s.length - 1) {
        result++;
      }
    } else if (stack.length > 0) {
      stack.pop();
      if (i === s.length - 1) {
        result++;
      } else if (stack.length < 1) {
        result++;
        head = s[i + 1];
      }
    }
  }

  return result;
}

// 같은 로직이지만 스택을 사용하지 않은 solution
function betterSolution(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) {
        count--;
      } else {
        count++;
      }
    }
  }

  return answer;
}
