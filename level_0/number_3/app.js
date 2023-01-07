function solution(dots) {
    let m = [0,0,0];
    let dotsCase = [
        (dots[3][1] - dots[2][1]) / (dots[3][0] - dots[2][0]),
        (dots[3][1] - dots[1][1]) / (dots[3][0] - dots[1][0]),
        (dots[2][1] - dots[1][1]) / (dots[2][0] - dots[1][0]),
    ];

    for (i=1; i<4; i++) {
        m[i-1] = (dots[i][1] - dots[0][1]) / (dots[i][0] - dots[0][0]);
    }

    if (m[0] == dotsCase[0]) {
        return 1;
    } else if (m[1] == dotsCase[1]) {
        return 1;
    } else if (m[2] == dotsCase[2]) {
        return 1;
    } else {
        return 0;
    }
}

// const dots = [[1, 4], [9, 2], [3, 8], [11, 6]];
const dots = [[3, 5], [4, 1], [2, 4], [5, 10]];

console.log(solution(dots));