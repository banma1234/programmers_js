function solution(price, money, count) {
    let result = 0;
    for(i=1; i<count+1; i++) {
        result += price*i
    }

    return (result - money >= 0 ? result - money : 0);
}

const price = 3;
const money = 20;
const count = 4;

console.log(solution(price, money, count));