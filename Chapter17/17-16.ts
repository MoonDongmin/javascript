function foo(){}
// 일반 함수로 호출
// [[Call]]이 호출. 모든 함수 객체는 [[Call]]이 구현
foo();

// 생성자 함수로서 호출
// [[Constructor]] 가 호출. 이때 [[Constructor]]를 갖지 않는다면 에러 발생
new foo();