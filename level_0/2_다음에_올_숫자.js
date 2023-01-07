function solution(common) {
    var answer = 0;
    var temp = [(common[1] / common[0]), (common[1] - common[0])];

    for (i=2; i<common.length; i++) {
        if (common[i-1] * temp[0] == common[i]) {
            answer = common[i] * temp[0];
        } else if (common[i] - temp[1] == common[i-1]) {
            answer = common[i] + temp[1];
        }
    }

    return answer;
}

function bestSolution(common) {
    if (common[2] - common[1] == common[1] - common[0]) {
        return common.pop() + common[1] - common[0]
    } else {
        return common.pop() * (common[1] / common[0]);
    }
}
/* 해당 solution이 가능한 이유
: 예외상황인 공차가 0인 등차수열이 공비가 1인 등비수열과 
결과값이 같기 때문
*/

const common = [1,2,3,4];
// const common = [2,4,8];

console.log(bestSolution(common));