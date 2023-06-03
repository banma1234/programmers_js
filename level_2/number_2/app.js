// 개선판
function betterSolution(fees, records) {
  const parkingTime = {};
  records.forEach(item => {
    let [time, id, type] = item.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map(v => v[1]);
}

// 처음 작성했던 코드
function solution(fees, records) {
  const answer = [];
  const park = new Map();
  const parkingFee = new Map();
  const isPark = new Map();

  records.forEach(item => {
    let [time, car, state] = item.split(" ");
    time = time.split(":").map(e => +e);
    time = time[0] * 60 + time[1];

    if (state === "IN") {
      park.set(car, time);
      isPark.set(car, true);
    } else {
      isPark.set(car, false);
      parkingFee.set(
        car,
        parkingFee.get(car) + time - park.get(car) || time - park.get(car),
      );
    }
  });

  for ([key, value] of isPark.entries()) {
    if (value) {
      parkingFee.set(
        key,
        parkingFee.get(key) + 24 * 60 - 1 - park.get(key) ||
          24 * 60 - 1 - park.get(key),
      );
      isPark.set(key, false);
    }
    answer.push(key);
  }

  answer.sort((a, b) => a - b);
  for ([car, time] of parkingFee.entries()) {
    if (time > fees[0]) {
      time = Math.ceil((time - fees[0]) / fees[2]);
      answer[answer.indexOf(car)] = fees[1] + time * fees[3];
    } else {
      answer[answer.indexOf(car)] = fees[1];
    }
  }

  return answer;
}
