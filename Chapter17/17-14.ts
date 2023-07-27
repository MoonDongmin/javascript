function foo() {
}

// 일반 함수 호출로서 호출: [[Call]]이 호출
foo();

// 생성자 함수 호출러서 호출: [[Construct]]가 호출
new foo();