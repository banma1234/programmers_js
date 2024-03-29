## (lv.1) 26번 : 성격 유형 검사하기

나만의 카카오 성격 유형 검사지를 만들려고 한다. 성격 유형 검사는 다음과 같은 4개 지표로 성격 유형을 구분한다. 성격은 각 지표에서 두 유형 중 하나로 결정된다.

| 지표 번호 | 성격 유형              |
| --------- | ---------------------- |
| 1번 지표  | 라이언형(R), 튜브형(T) |
| 2번 지표  | 콘형(C), 프로도형(F)   |
| 3번 지표  | 제이지형(J), 무지형(M) |
| 4번 지표  | 어피치형(A), 네오형(N) |

4개의 지표가 있으므로 성격 유형의 조합은 총 16개이다. 예를들어 `"RFMN"`이나 `"TCMA"`와 같은 성격 유형이 있다.

검사지에는 총 `n`개의 질문이 있고, 각 질문에는 아래와 같은 7개의 선택지가 존재한다.

- `매우 비동의`
- `비동의`
- `약간 비동의`
- `모르겠음`
- `약간 동의`
- `동의`
- `매우 동의`

각 질문은 1가지 지표로 성격 유형 점수를 판단한다. 예를들어 어떤 한 질문에서 4번지표(A, N)를 기준으로 점수를 매긴다고 하였을 때 다음과 같이 점수를 매길 수 있다.

| 선택지        | 성격 유형 점수 |
| ------------- | -------------- |
| `매우 비동의` | N형 3점        |
| `비동의`      | N형 2점        |
| `약간 비동의` | N형 1점        |
| `모르겠음`    | A, N 모두 0점  |
| `약간 동의`   | A형 1점        |
| `동의`        | A형 2점        |
| `매우 동의`   | A형 3점        |

만약 검사자가 `약간 동의`를 선택할 경우 `어피치형(A)` 1점을 받게 된다. `매우 비동의`를 선택할 경우 `네오(N)`형 3점을 받게 된다.

각 선택지는 지표나 성격 유형에 관계없이 고정된 크기의 점수를 가지고 있으며 각 질문별로 다른 지표를 참고할 수 있다. 또한 같은 4번 지표라도 A가 동의인 경우가 아닌 N이 동의인 경우 또한 주어질 수 있다.

검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단하되 하나의 지표에서 각 성격 유형 점수가 같다면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라 판단한다.

질문마다 판단하는 지표를 담은 1차원 문자열 배열 `survey`와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 `choices`가 주어질 때 검사자의 성격 유형 검사 결과를 return하는 solution을 작성하라.

---

- 1 <= `survey.length` <= 1000
  - `survey`의 원소는 `"RT", "TR", "FC", "CF", "MJ", "JM", "AN", "NA"` 중 하나이다.
  - `survey[i]`의 첫 번째 문자는 `i+1`번 질문의 `비동의`관련 선택지를 선택하면 할당되는 성격 유형을 뜻한다.
  - `survey[i]`의 두 번째 문자는 `i+1`번 질문의 `동의`관련 선택지를 선택하면 할당되는 성격 유형을 뜻한다.
- `choices.length` = `survey.length`
  - 1 <= `choices`의 각 원소 <= 7
  - `choices[i]`는 검사자가 선택한 `i+1`번쨰 질문의 선택지를 뜻한다.

---

`객체`를 이용해 성격 유형(이하 MBTI)별 획득 점수를 기록하고 MBTI의 value를 비교해 문제를 해결한다.

- 4개의 지표를 대표하는 배열 `types`를 선언하고 `"RT"`, `"CF"`, `"JM"`, `"AN"`을 원소로 할당한다.
- 성격 유형별 점수를 기록할 객체 `MBTI`를 선언하고 객체의 `key`로는 유형의 명칭을, `value`로는 최초값인 `0`을 할당한다.
- `choices`를 `choice`와 `index`로 순회하며 다음 로직을 수행한다.
  - `survey[index]`의 값을 `[disagree, agree]`로 쪼개어 선언한다.
  - `choice` - 4의 절대값을 할당된 점수라고 가정한다.
  - `choice` > 4인 경우 `MBTI[agree]`에 할당된 점수를, 그렇지 않은 경우 `MBTI[disagree]`에 할당된 점수를 부여한다.
- `types`의 각 원소를 `[a, b]`로 쪼개어 `map()`을 이용해 순회하며 다음 로직을 수행한다.
  - `MBTI[b]` > `MBTI[a]`인 경우 `b`를, 그렇지 않을 경우 `a`를 return한다.
- 순회가 끝나고 새로 반환된 배열을 `join("")`을 이용해 문자열로 변환하여 return한다.
