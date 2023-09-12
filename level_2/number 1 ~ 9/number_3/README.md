## (lv.2) 3번 : 귤 고르기

판매할 귤 중 `k`개를 골라 상자 하나에 담아 판매하려고 한다. 판매하고자 하는 귤의 크기가 일정하지 않아 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화 하려고 한다.

한 상자에 담으려는 귤의 개수 `k`와 귤의 크기를 담은 배열 `tangerine`이 주어질 때 귤 `k`개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하는 solution을 작성하라.

---

- 1 <= `k` <= 100,000
- 1 <= `tangerine` <= 10,000,000

---

`객체`를 이용해 크기별로 귤을 분류한 후 내림차순으로 정렬하여 문제를 해결한다.

- 객체 `tangerineCounter`를 선언한 후 `tangerine`의 각 원소를 `item`으로 순회하며 `tangerineCounter[item]`의 값이 존재하면 해당 값을 1 증가시키고 그렇지 않다면 1로 초기화한다.
- `tangerineCounter`의 values를 `Object.values()`를 이용해 배열 형태로 변환한 후 내림차순으로 정렬, `kindOfTengerine` 변수에 할당한다.
- 합을 나타내는 변수 `sum`을 0으로 초기화하고 `kindOfTengerine`을 `item`으로 순회하며 다음 로직을 수행한다.
  - `sum` >= `k`인 경우 break로 반복문을 탈출한다.
  - 그렇지 않을 경우 `answer`를 1 증가시키고 `sum`에 `item`의 값을 더한다.
- `answer`를 return한다.
