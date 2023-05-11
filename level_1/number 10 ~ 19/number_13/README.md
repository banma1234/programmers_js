## (lv.1) 13번 : 둘만의 암호

두 문자열 `s`와 `skip`, 자연수 `index`가 주어질 때 다음 규칙에 따라 암호를 생성하는 solution을 작성하라.

- 문자열 `s`의 각 알파벳을 `index`만큼 뒤의 알파벳으로 바꾼다.
- `index`만큼의 뒤의 알파벳이 `z`를 넘어갈 경우 다시 `a`로 돌아간다.
- `skip`에 있는 알파벳은 제외하고 건너뛴다.

---

- 5 <= `s`의 길이 <= 50
- 1 <= `skip` <= 10
- `s`와 `skip`은 알파벳 소문자로만 이루어져 있다.
  - `skip`에 포함되는 알파벳은 `s`에 포함되지 않는다.
- 1 <= `index` <= 20

---

`s`와 `skip`의 정보를 `ASCII_code`(이하 아스키코드)로 형변환 하여 로직을 수행한다.

- `charCodeAt()` 메소드를 이용해 `s`와 `skip`의 내용물을 `아스키코드`로 변환한다.

- `index`만큼 반복하며 로직을 수행한다.

  - `do while`문을 활용해 최초 1회에 관해 조건문에 관계없이 로직을 수행한다.
  - `item`을 1 증가시키고 만약 `item`이 문자열 `"z"(=122)`보다 큰 경우 `"a"(=97)`로 초기화한다.
  - `item`이 `skip`에 포함될 경우 이를 반복한다.

- `fromCharCode()` 메소드를 이용해 `아스키코드`를 문자열로 형변환하여 return한다.