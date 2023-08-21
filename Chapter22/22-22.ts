function getThisBinding() {
    return this;
}

// this로 사용할 객체
const thisArg = {a: 1};

// bind 메서드는 첫 번째 인수로 전달한 thisArg로 this 바인딩이 교체된
// getThisBinding 함수를 새롭게 생성해 반환
console.log(getThisBinding.bind(thisArg));
// bind 메서드는 함수를 호춣하지 않으므로 명시적으로 호출해야함
console.log(getThisBinding.bind(thisArg)());