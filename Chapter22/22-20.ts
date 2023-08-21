function getThieBinding() {
    console.log(arguments);
    return this;
}

// this로 사용할 객체
const thisArg = {a: 1};

// getThisBinding 함수를 호출하면서 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩함
// apply 메서드는 호출할 함수의 인수를 배열로 묶어 전달함
console.log(getThieBinding.apply(thisArg, [1, 2, 3]));

// call 메서드는 호출할 함수의 인수를 쉼표로 구분한 리스트 형식으로 전달
console.log(getThieBinding.bind(thisArg, 1, 2, 3));