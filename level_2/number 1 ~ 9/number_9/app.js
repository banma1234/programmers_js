function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      i++;
      continue;
    }
    stack.at(-1) === s[i] ? stack.pop() : stack.push(s[i]);
  }

  return stack.length ? 0 : 1;
}
