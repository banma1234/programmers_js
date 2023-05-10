function solution(n, m, section) {
  var answer = 0;
  let wall = Array(n).fill().map((e, i) => {
    if (section.includes(i+1)) {
        return true
    }
    return false
  })

  for (let i=0; i<wall.length; i++) {
    if (wall[i] === true) {
        i += m-1;
        answer++;
    }
  }

  return answer;
}