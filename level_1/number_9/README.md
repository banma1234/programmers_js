## (lv.1) 9번 : 추억점수
사진별로 추억 점수를 매기려고 한다. 사진 속에 나오는 인물의 그리움 점수를 모두 합산한 값이 해당 사진의 추억 점수라고 한다. 그리워하는 사람의 이름을 담은 문자열 배열 `name`, 각 사람별 그리움 점수를 담은 정수 배열 `yearning`, 각 사진에 찍힌 인물의 이름을 담은 이차원 문자열 배열 `photo`가 매개변수로 주어질 때 사진들의 추억 점수를 `photo`에 주어진 순서대로 배열에 담아 return하는 solution을 작성하라.
***

* 3 ≤ `name`의 길이 = `yearning`의 길이≤ 100
    * 3 ≤ `name`의 원소의 길이 ≤ 7
    * `name`에는 중복된 값이 들어가지 않으며 알파벳 소문자로만 이루어져있다.
    * 1 ≤ `yearning[i]` ≤ 100

* 3 ≤ `photo`의 길이 ≤ 100
    * 1 ≤ `photo[i]`의 길이 ≤ 100
    * 3 ≤ `photo[i]`의 원소(문자열)의 길이 ≤ 7
    * `photo[i]`의 원소들은 중복된 값이 들어가지 않으며 알파벳 소문자로만 이루어져있다.

***

`name`과 `yearning`의 크기는 항상 같고 각 index값에 해당하는 원소가 매핑되어 있기 때문에 `name`의 원소가 `photo[i]`에 포함된 경우 해당 원소의 index값에 해당하는 `yearning`의 원소를 `sum`에 더해준다.

* 이중 반복문을 이용해 `photo`의 각 원소(배열)에 `name`의 각 원소들이 포함되어 있는지를 `includes()` 메소드를 이용해 파악한다.

* `includes(name[j])`가 `true`일 경우 `yearning[j]`를 `sum`에 더하고 연산이 끝난 후 `sum`을 `answer`에 push한다.