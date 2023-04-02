function solution(x, n) {
    let result = [];
    for(i=1; i<n+1; i++) {
        result.push(i*x);
    }

    return result;
}

let x = 2;
let n = 5;

console.log(solution(x, n));