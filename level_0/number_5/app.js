function solution(numer1, denom1, numer2, denom2) {
    const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1%num2) : num1);

    const GCD = getGCD(denom1, denom2);
    const LCM = denom1 * denom2 / GCD;

    let x = (LCM/denom1*numer1)+(LCM/denom2*numer2);
    const GCD_2 = getGCD(x, LCM);

    return answer = [x/GCD_2, LCM/GCD_2];
}

let a = 9;
let b = 1;
let denom1 = 2;
let denom2 = 3;

console.log(solution(a, denom1, b, denom2));