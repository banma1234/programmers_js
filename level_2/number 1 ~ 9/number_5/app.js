function solution(numbers) {
  const stack = [];
  let answer = new Array(numbers.length).fill(-1);

  numbers.forEach(item => {
    let pivot = stack.length - 1;

    if (item > stack[pivot]) {
      while (item > stack[pivot]) {
        if (answer[pivot] === -1) {
          answer[pivot] = item;
        }
        pivot--;
      }
    }
    stack.push(item);
  });

  return answer;
}

function better_solution(nums) {
  const dp = new Array(nums.length).fill(-1);
  const stack = [0];
  for (let i = 1; i < nums.length; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i])
      dp[stack.pop()] = nums[i];
    stack.push(i);
  }
  return dp;
}

const numbers = [9, 1, 5, 3, 6, 2];

console.log(solution(numbers));
