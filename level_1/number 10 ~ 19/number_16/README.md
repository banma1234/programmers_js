## (lv.1) 16번 : 두 개 뽑아서 더하기

정수배열 `numbers`가 주어진다. `numbers`에서 서로 다른 인덱스에 해당하는 두 개의 수를 더해 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return하는 solution을 작성하라.

---

- 2 <= `numbers`의 길이 <= 100
- 0 <= `numbers[i]` <=100

---

브루트포스로 모든 경우의 수를 구한 후 `Set`자료형을 사용해 중복을 제거한다.

- `Set`자료형을 가진 변수 `set`을 선언한다.
- 2중 반복문을 이용해 로직을 수행한다.
  - 바깥 루프는 `i = 0`, 안쪽 루프는 `j = i+1`을 인자로 가지게 한다.
  - 안쪽 루프에서 `numbers[i]` + `numbers[j]`를 수행해 두 수의 합을 구한다.
  - 두 수의 합 `sum`을 `set`에 add한다. 중복값인 경우 set 내부에서 자동으로 탈락된다.
- `set`을 배열로 변환한 후 `sort()` 메소드를 활용해 오름차순으로 정렬하여 return한다.
