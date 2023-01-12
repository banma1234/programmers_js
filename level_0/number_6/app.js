function solution(quiz) {
    var answer = [];
    let temp = [];

    quiz.forEach(item => {
        temp = item.split(' ');
        switch(temp[1]) {
            case '+':
                if (parseInt(temp[0]) + parseInt(temp[2]) == parseInt(temp[4])) answer.push('O');
                else    answer.push('X');
                break;
            case '-':
                if (parseInt(temp[0]) - parseInt(temp[2]) == parseInt(temp[4])) answer.push('O');
                else    answer.push('X');
                break;
        }
    });
    return answer;
}

const quiz = ["3 - 4 = -3", "5 + 6 = 11"];

console.log(solution(quiz));