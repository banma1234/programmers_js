## (lv.1) 27번 : 신고 결과 받기

게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템을 개발하려 한다. 개발하려는 시스템은 다음과 같다.

- 각 유저는 한 번에 한 명의 유저를 신고할 수 있다.
  - 신고 횟수에 제한은 없다. 서로 다른 유저를 계속해서 신고할 수 있다.
  - 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리된다.
- k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송한다.
  - 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송한다.

다음은 전체 유저 목록이 `["muzi", "frodo", "apeach", "neo"]`이고, `k = 2`(즉, 2번 이상 신고당하면 이용 정지)인 경우의 예시이다.

| 유저 ID | 유저가 신고한 ID | 설명                  |
| ------- | ---------------- | --------------------- |
| muzi    | frodo            | muzi가 frodo를 신고   |
| apeach  | frodo            | apeach가 frodo를 신고 |
| frodo   | neo              | frodo가 neo를 신고    |
| frodo   | neo              | frodo가 neo를 신고    |
| frodo   | neo              | frodo가 neo를 신고    |

각 유저별로 신고당한 횟수는 다음과 같다.

| 유저 ID | 신고당한 횟수 |
| ------- | ------------- |
| muzi    | 0             |
| frodo   | 2             |
| apeach  | 0             |
| neo     | 1             |

위 예시에서는 2번 이상 신고당한 `frodo`의 게시판 이용이 정지된다. `neo`는 신고당한 횟수는 3회이지만 3회 모두 동일한 유저(frodo)가 신고한 경우이므로 1회로 간주한다.

이때, `frodo`를 신고한 유저는 `muzi`, `apeach`이므로 `muzi`와 `apeach`에게 신고안내 메일을 전송하게 된다.

이용자의 ID가 담긴 문자열 배열 `id_list` 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 `report`, 정지 기준이 되는 신고 횟수 `k`가 주어질 때, 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return 하는 solution을 작성하라.

---

- 2 ≤ `id_list`의 길이 ≤ 1,000
  - 1 ≤` id_list`의 원소 길이 ≤ 10
  - `id_list`의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어져 있습니다.
  - `id_list`에는 같은 아이디가 중복해서 들어있지 않습니다.
- 1 ≤ `report`의 길이 ≤ 200,000
  - 3 ≤ `report`의 원소 길이 ≤ 21
  - `report`의 원소는 "이용자id 신고한id"형태의 문자열입니다.
  - 예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다.
  - id는 알파벳 소문자로만 이루어져 있습니다.
  - 이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다.
  - 자기 자신을 신고하는 경우는 없습니다.
- 1 ≤ `k` ≤ 200, `k`는 자연수입니다.
- return 하는 배열은 `id_list`에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를 담으면 됩니다.

---

`Set`자료형을 이용해 중복 신고인 경우를 제거하고 `Map`자료형을 이용해 신고 대상자의 신고당한 횟수를 기록 및 신고기록간의 대조를 수행한다.

- 배열인 `report`를 `Set`자료형으로 형변환한 후 그 결과값을 다시 배열로 형변환, `map()`과 `split()`메소드를 이용해 신고자와 신고 대상자를 분리하여 새로운 배열에 `reports`에 담아 return한다.
- `counts`라는 `Map`을 선언한 후 `reports`를 순회하며 다음 로직을 수행한다.
  - `counts`에서 key가 `reports`의 신고 대상자인 value를 1 증가시킨다. 기존에 없던 key인 경우 1로 초기화해준다.
- `good`라는 `Map`을 선언한 후 `reports`를 순회하며 다음 로직을 수행한다.
  - `counts.get[신고 대상자]` >= `k`일 경우 `good`에서 key가 `reports`의 신고 대상자인 value를 1 증가시킨다. 기존에 없던 key인 경우 1로 초기화해준다.
- `id_list`에서 `map()`메소드를 이용해 `map`의 프로퍼티인 `a`를 기준으로 `good.get(a)`가 존재할 경우 해당 값을, 그렇지 않을 경우 0을 return한다.
