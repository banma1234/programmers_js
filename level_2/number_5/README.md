## (lv.2) 5번 : 뒤에 있는 큰 수 찾기

정수로 이루어진 배열 `numbers`가 있다. 배열의 각 원소들에 대해 자신보다 뒤에 있는 숫자 중 자신보다 크면서 가장 가까이 있는 수를 뒷 큰수라 한다.

정수 배열 `numbers`가 주어질 때 모든 원소에 대한 뒷 큰수들을 차례로 담은 배열을 return하는 solution을 작성하라.

---

- 4 <= `numbers`의 길이 <= 1,000,000
- 1 <= `numbers[i]`의 원소 <= 1,000,000

---

`stack`에 `numbers`의 원소를 push 하며 `stack`의 가장 뒤편에서부터 각 원소 간의 값을 비교, 조건에 부합할 경우 `answer`에 해당 원소의 값을 기록한다.

주어지는 `numbers`배열의 크기가 매우 크기 때문에 일반적인 방법으로는 시간초과 이슈가 발생할 가능성이 큼으로 특정 알고리즘을 이용해 문제풀이를 진행하는 것이 옳다.

- `numbers.length`만큼 -1을 가득 채운 배열 `answer`를 선언하고 빈 배열 `stack` 또한 선언한다.
- `numbers`를 `item`으로 순회하며 다음 로직을 수행한다.
  - `stack`의 가장 끝자리 index번호를 담은 변수 `pivot`을 선언한다.
  - `item`이 `stack[pivot]`보다 큰 경우 while문을 이용해 다음 로직을 반복해서 수행한다.
    - `answer[pivot]`의 값이 -1일 경우. 즉 최초 조우시 `answer[pivot]`의 값을 `itme`으로 초기화 한다.
    - `pivot`의 값을 1 감소시킨다.
    - 만약 `item`이 `stack[pivot]`보다 작은 경우 반복문을 종료한다.
  - while문 종료 후 `stack`에 `item`을 push한다.
- `numbers` 순회 종료 후 `answer`를 return한다.
