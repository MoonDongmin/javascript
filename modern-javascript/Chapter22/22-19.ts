function getThisBinding() {
    return this;
}

// this로 사용할 객체
const thisArg = {a: 1};

console.log(getThisBinding());

// getThisBinding 함수를 호출하면 인수로 전달한 객체를 getThisBinding 함수의 this에 바인딩함
console.log(getThisBinding.apply(thisArg)); //{a: 1};
console.log(getThisBinding.call(thisArg));  //{a: 1};