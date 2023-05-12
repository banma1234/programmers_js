function solution(phone_number) {
    const count = phone_number.length - 4;
    const pattern = new RegExp(`^[0-9]{${count}}`)
    return phone_number.replace(pattern, "*".repeat(count))
}

// 이왕 정규표현식 쓸거면 제대로
function betterSolution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

