// increase 프로퍼티에 할당한 화살표 함수의 상위 스코프는 전역
// 따라서 increase 프로퍼티에 할당한 화살표 함수의 this는 전역 객체를 가리킴
const conuter = {
    num: 1,
    increase: () => ++this.num
};
console.log(conuter.increase());