## (lv.2) 7번 : 전화번호 목록

전화번호가 다음과 같을 경우, 구조대 전화번호는 영석이의 전화번호의 접두사라 한다.

- 구조대: 119
- 박준영: 97 974 223
- 지영석: 11 9552 4421

전화번호를 담은 배열 `phone_book`이 주어질 때, 어떤 번호가 다른 번호의 접두어인 경우가 있으면 `false`를, 그렇지 않으면 `true`를 return하는 solution을 작성하라.

---

- 1 <= `phone_book`의 크기 <= 1,000,000
- 1 <= `phone_book`의 각 원소 길이 <= 20
- 같은 전화번호가 중복해서 들어있는 경우는 없다.

---

`phone_book`을 오름차순으로 정렬한 후 prefix와 비교하여 조건에 해당할 경우 곧바로 false를 return, 끝까지 false가 return되지 않으면 true를 return한다.

- sort() 메소드를 이용해 `phone_book`을 오름차순으로 정렬한다.
- `phone_book`을 index `i`로 순회하며 다음 로직을 수행한다.
  - substr() 메소드를 이용해 `phone_book[i]`의 크기만큼 `phone_book[i+1]`의 앞에서부터 문자를 자른 후 변수 `next`로 초기화 한다.
  - `next` === `phone_book[i]`를 성립할 경우 즉시 false를 return, solution을 종료한다.
- 만약 정상적으로 반복문이 종료된다면 true를 return한다.
