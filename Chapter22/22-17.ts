// 생성자 함수
function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스섵ㄴ스를 가리킴
    this.radius = radius;
    this.getDiameter = function () {
        return 2 * this.radius;
    };
}

// 반지름이 5인 원 객체를 생성
const circle1 = new Circle(5);
// 반지름이 10인 원 객체 생성
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// new 연산자를 호출하지 않으면 일반 함수 호출
const circle3 = Circle(15);

// 일반함수로 호출되면 undefined 호출
console.log(circle3);

// 일밚마수로 호출된 Circle 내부의 this는 전역 객체를 가리킴
// @ts-ignore
console.log(radius);