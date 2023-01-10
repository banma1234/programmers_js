

function solution(lines) {
    const overlap = lines.reduce((item, [x, y]) => {
        console.log("===start===");
        for (let i = Math.min(x, y) + 1; i <= Math.max(x, y); i++) {
            console.log("i : ", i);
            item[i] = item[i] 
                ? item[i] + 1
                : 1;
        }
        console.log("item : ", item);
        return item;
    }, {});

    return Object.values(overlap).filter(v => v > 1).length;
}

const lines = [
    [[0, 1], [2, 5], [3, 9]],
    [[-1, 1], [1, 3], [3, 9]],
    [[0, 5], [3, 9], [1, 10]]
];

for (i=0; i<lines.length; i++) {
    console.log(solution(lines[i]));
}