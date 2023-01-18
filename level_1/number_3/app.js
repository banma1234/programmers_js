function solution(n) {
    let answer = 0;

    if (n%2 == 1)   return 2;
    else {
        for (i=n-1; i>=3; i-=2) {
            if (n%i == 1)   answer = i;
        }
        return answer;
    }
}

let n = 12;
console.log(solution(n));