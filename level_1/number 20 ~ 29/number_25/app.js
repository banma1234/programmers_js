function solution(today, terms, privacies) {
  const result = [];
  today = today.split(".").map(e => +e);
  today = today[2] + today[1] * 28 + today[0] * 28 * 12;
  terms = terms.reduce((acc, item) => {
    let target = item.split(" ");
    return { ...acc, [target[0]]: +target[1] };
  }, {});

  privacies.forEach((item, i) => {
    let target = item.split(" ");
    let date = target[0].split(".").map(e => +e);
    const validate = terms[target[1]] * 28;
    let compareDate = date[2] + date[1] * 28 + date[0] * 28 * 12 + validate;

    if (today >= compareDate) {
      result.push(i + 1);
    }
  });

  return result;
}
