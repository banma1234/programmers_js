let t = "10203";
let p = "15";
let count = 0;
let compare = p.length - 1;

for (let i=0; i<t.length - compare; i++) {
    let temp = parseInt(t.slice(i, i+compare+1));
    if (temp <= parseInt(p)) {
        count += 1;
    }
}

console.log(count);