function solution(sizes) {
    let maxW = 0;
    let maxH = 0;

    sizes.forEach((item) => {
        item.sort((x, y) => { return y - x });
        if(maxW <= item[0]) maxW = item[0];
        if(maxH <= item[1]) maxH = item[1];
    })
    return maxW * maxH;
}

const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
console.log(solution(sizes));