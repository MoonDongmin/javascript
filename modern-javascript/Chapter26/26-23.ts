const Foo = () => {
};
// 화살표 함수는 생성자 함수로서 호출할 수 없음
new Foo();
// 화살표 함수는 prototype 프로퍼티가 없음
Foo.hasOwnProperty('prototype');