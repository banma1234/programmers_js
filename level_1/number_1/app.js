function solution(numbers) {
    let answer = 0;
    numbers.forEach((e) => {
        answer += e
    })
    
    return 45 - answer;
}

numbers = [5,8,4,0,6,7,9];
console.log(solution(numbers));