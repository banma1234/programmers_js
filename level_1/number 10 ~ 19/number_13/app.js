function solution(s, skip, index) {
  var answer = "";
  // for char of s
  const dic = skip.split("").map(e => {
    return e.charCodeAt(0);
  });
  for (char of s) {
    // char = char.ASCII
    let item = char.charCodeAt(0);
    // for i in index
    for (let i = 0; i < index; i++) {
      // if char includes skip
      item = skipItem(item, dic);
    }
    // answer += char
    answer += String.fromCharCode(item);
  }
  return answer;
}

function skipItem(item, dic) {
  do {
    item++;
    if (item > 122) {
      item = 97;
    }
  } while (dic.includes(item));

  return item;
}

// 정규표현식을 이용해 시간복잡도가 줄어든 모습
function betterSolution(s, skip, index) {
  let ans = "";
  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    new RegExp(`[^${skip}]`, "g"),
  );
  for (const c of s) {
    const newIdx = matched.indexOf(c) + index;
    // matched[newIdx]가 z보다 클 겨우 알파벳의 개수만큼 나눈 나머지가 a가 된다.
    ans += matched[newIdx % matched.length];
  }
  return ans;
}
