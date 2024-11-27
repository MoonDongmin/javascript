// 표준 빌트인 객체를 확장한느 것은 권장하지 않음
Array.prototype.sum = function () {
    return this.reduce((acc, cur) => acc + cur, 0);
};

[1, 2].sum();