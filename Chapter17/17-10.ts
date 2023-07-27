function Circle(radius) {
    // 1. 암묵적으로 인스턴스 생성, this에 바인딩

    // 2. this에 바인딩되어 있는 인스턴스를 초기화
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환됨
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환
const circle = new Circle(1);
console.log(circle);