## (lv.1) 23번 : 가장 가까운 글자

문자열 `s`의 각 원소마다 자신과 같은 글자 중 자신보다 앞에 위치하면서 자신과 가장 가까운 곳에 있는 원소가 어디에 있는지 알고자 한다. 위 조건에 부합하는 원소가 존재할 경우 자신보다 index상으로 얼마나 앞에 있는지 배열에 기록하고 조건에 부합하는 원소가 없을 경우 `-1`을 배열에 기록한다. solution을 작성하라. 문자열 `s`가 주어졌을 때 각 원소별로 위의 로직을 수행하는 solution을 작성하라.

---

- 1 <= `s` <= 10,000
- 문자열 `s`는 영어 소문자로만 이루어져 있다.

---

`객체`를 이용해 `s`에서의 알파벳 별 index를 기록하고 해당 값을 참고하여 로직을 수행한다.

- 객체 `indexCounter`를 선언하고 for문을 이용해 `s`를 탐색하며 다음 로직을 수행한다.
  - `indexCounter`에 `s[i]`가 존재하지 않을 경우 `answer`에 `-1`을 push하고 `indexCounter`에 `s[i]`의 index값을 기록한다.
  - `s[i]`가 존재할 경우 현재 s[i]의 위치인 `i`에서 `indexCounter`에 기록된 `s[i]`에 해당하는 알파벳의 index값을 뺀 값을 `answer`에 push하고 `indexCounter[s[i]]`의 값을 `i`로 초기화한다.