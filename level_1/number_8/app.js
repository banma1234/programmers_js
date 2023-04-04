function solution(number, limit, power) {
    let result = 0;
    const arr = Array(number).fill().map((e, i) => {
        let target = i+1;
        return devisor(target);        
    });

    arr.forEach((e) => {
        if (e > limit) {
            result += power;
        } else {
            result += e;
        }
    });

    return result;
}

const devisor = (target) => {
    let result = new Set();
    for (let i=1; i<Math.sqrt(target)+1; i++) {
        if (target%i === 0) {
            result.add(i);
            if (target/i != 0)  result.add(target/i);
        }
    };

    return result.size;
};

const number = 10;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));