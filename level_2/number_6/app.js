function solution(people, limit) {
  let count = 0;
  let sortedPeople = people.sort((a, b) => b - a);

  sortedPeople.forEach(man => {
    if (man + sortedPeople.at(-1) > limit) {
      count++;
    } else {
      sortedPeople.pop();
      count++;
    }
  });

  return count;
}
