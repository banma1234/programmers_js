## (lv.0) 1번 : 옹알이
아가야는 `"aya"`, `"ye"`, `"woo"`, `"ma"` 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못한다. 아가야가 발음할 수 있는 `단어의 개수`를 return하는 solution을 작성하라.

* 1 ≤ `babbling[i]`의 길이 ≤ 15
* 1 ≤ `babbling`의 길이 ≤ 100
* 각 단어는 최대 한 번씩만 등장한다.
* 문자는 알파벳 소문자로만 이루어져있다.

***

js의 `정규표현식`을 활용하여 특정 `패턴`(옹알이)을 검사하는 solution을 작성하면 되겠다.

* 패턴을 포함한 정규표현식 패턴 `patterns`를 작성한다.
    - 각 패턴마다 `OR`를 주고 `g` 속성으로 문장 전체에서 모든 패턴을 검사하도록 한다.

* 패턴에 해당되는 단어를 삭제하여 정답인지 판별한다.
    - 모든 글자가 없어져 `공백`이 되면 `true`, 글자가 하나라도 남아있다면 `false`이다.