function solution(players, callings) {
  let freq = {}
  players.forEach((item, i) => {
    freq[item] = i;
  })

  callings.forEach((item) =>{
    let current = freq[item]
    let temp = players[current - 1];

    players[current] = temp;
    players[current - 1] = item;

    freq[item]--;
    freq[temp] = current
  })
  
  return players
}