// 최초작성 solution
function solution(bandage, health, attacks) {
  let count = 0;
  let currentHealth = health;

  const action = {};
  attacks.forEach(element => {
    action[element[0]] = element[1];
  });

  for (let i = 1; i <= attacks.at(-1)[0]; i++) {
    if (action[i]) {
      count = 0;
      currentHealth -= action[i];
      if (currentHealth <= 0) {
        currentHealth = -1;
        break;
      }
      continue;
    }

    count++;
    currentHealth += bandage[1];
    if (count === bandage[0]) {
      currentHealth += bandage[2];
      count = 0;
    }

    if (currentHealth > health) {
      currentHealth = health;
    }
  }

  return currentHealth;
}

// 개선된 solution
function betterSolution(bandage, health, attacks) {
  let currHealth = health;
  let currTime = 0;

  for (let [attackTime, damage] of attacks) {
    let diffTime = attackTime - currTime - 1;
    // 공격시간 - 현재시간 - 1 = 붕대감기 성공한 횟수
    currHealth +=
      diffTime * bandage[1] + Math.floor(diffTime / bandage[0]) * bandage[2];

    if (currHealth > health) currHealth = health;
    currHealth -= damage;
    if (currHealth <= 0) return -1;
    currTime = attackTime;
  }

  return currHealth;
}
