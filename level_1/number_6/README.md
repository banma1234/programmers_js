## (lv.1) 6번 : x만큼 간격이 있는 n개의 숫자
정수 `x`와 자연수 `n`을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 `리스트`를 return하는 solution을 작성하라.

***

* `n` <= 1,000

* -10,000,000 <= `x` <= 10,000,000

***

`n`만큼 반복하며 `x += x`를 수행하면 되겠다.

* `push()`메소드를 이용해 반복문 내에서 조건에 맞게 원소를 추가해준다.