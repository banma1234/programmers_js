## (lv.0) 6번 : OX 퀴즈
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 `quiz`가 매개변수로 주어질 때 수식이 옳다면 `O`를, 틀리다면 `X`를 return하는 solution을 작성하라

***

* 연산 기호와 숫자 사이는 항상 하나의 공백이 존재한다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않는다.

* 1 ≤ `quiz`의 길이 ≤ 10

* -10,000 ≤ X, Y ≤ 10,000, -20,000 ≤ Z ≤ 20,000

* 연산자는 `+`, `-`만 주어진다.

***

연산 기호와 숫자 사이는 항상 하나의 공백이 존재하기 때문에 `공백`을 기준으로 나누어 새로운 배열로 초기화한 후 계산을 진행하면 되겠다. 

* quiz의 각 원소를 순회하며 `str.split()`메소드를 이용해 문자열을 자른다.
    - 파라미터로는 공백을 입력한다. ex) str.split(' ');

* 한번의 루프에 문자열 자르기 및 계산을 같이 진행하여 코드를 간소화한다.

