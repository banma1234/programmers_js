function solution(food) {
  // deque = new Deque includes "0"
  let deque = ["0"];

  // for item of reversed food
  for (let i = food.length - 1; i > 0; i--) {
    // item = index of item * (amount of item / 2)
    let amount = Math.floor(food[i] / 2);
    let item = String(i).repeat(amount);

    //    push item at deque.head & deque.tail
    deque = [item, ...deque];
    deque.push(item);
  }

  return deque.join("");
}
