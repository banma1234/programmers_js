function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  
  let min = arr[0]
  arr.forEach((item) => {
    if (min > item) {
        min = item
    }
  })
  arr.splice(arr.indexOf(min), 1);

  return arr;
}
