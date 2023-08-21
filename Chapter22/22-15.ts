// const anotherPerson ={
//     name:'Kim'
// };
// // getName 메서드를 anotherPerson 객체의 메서드로 할당
// anotherPerson.getName = person.getName;
//
// // getName 메서드를 호출한 객체는 anotherPerson임
// console.log(anotherPerson.getName());
//
// // getName 메서드를 변수에 할당
// const getName = person.getName();
//
// // getName 메서드를 일반 호출로 호출
// console.log(getName());
// // 일반 함수로 호출된 getName 함수 내부의 this.name은 브라우저 환경에서 window.name과 같음
// // 브라우저 환경에서 window.name은 브라우저 창의 이름을 나타내는 빌트인 프로퍼티며 기본값은 ''이다.
// // Node.js 호나경에서 this.name은 undefined임