// 화살표 함수는 상위 스코프의 this를 참조하
() => this.x;

// 익명 함수에 상위 스코프의 this를 주입함. 위 화살표 함수와 동일하게 동작함
(function () {
    return this.x;
}).bind(this);