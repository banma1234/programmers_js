babbling = ["wooayaye", "ayayeeumaaa"];

var answer = 0;
var temp = "";

const patterns = /aya|ye|woo|ma/g;

babbling.forEach((item) => {
    temp = item.replace(patterns, '');
    if (temp == '') answer++;
})

console.log(answer);