// sudo code
/*
keymap = [{ A:0, B:1, C:3, D:4 }, { B:0, C:1, E:2, F:3, D:4 }]
keyboard = { ...keymap }

int result = []
int sum = 0
for target of targets
    if keyboard exists element of target then
        sum += keyboard[element]
    push sum to result
    sum = 0
*/

function solution(keymap, targets) {
  let answer = [];
  const newKeyboard = {};

  keymap.forEach(e => {
    e.split("").forEach((item, i) => {
      !newKeyboard[item]
        ? (newKeyboard[item] = i + 1)
        : (newKeyboard[item] = Math.min(newKeyboard[item], i + 1));
    });
  });

  for (let target of targets) {
    let sum = 0;
    for (item of target) {
      sum += newKeyboard[item];
    }

    !sum ? answer.push(-1) : answer.push(sum);
  }

  return answer;
}
