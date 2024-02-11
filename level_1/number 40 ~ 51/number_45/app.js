function solution(s, n) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const text = s[i];
    if (text == " ") {
      result += " ";
      continue;
    }
    let textArr = upper.includes(text) ? upper : lower;
    let index = textArr.indexOf(text) + n;
    if (index >= textArr.length) index -= textArr.length;
    result += textArr[index];
  }

  return result;
}
