function solution(s) {
  let count = 0;
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    let stack = [];
    for (item of arr) {
      switch (item) {
        case "]":
          stack.at(-1) === "[" ? stack.pop() : stack.push(item);
          break;
        case "}":
          stack.at(-1) === "{" ? stack.pop() : stack.push(item);
          break;
        case ")":
          stack.at(-1) === "(" ? stack.pop() : stack.push(item);
          break;
        default:
          stack.push(item);
          break;
      }
    }
    if (!stack.length) count++;

    let temp = arr.shift();
    arr.push(temp);
  }

  return count;
}
