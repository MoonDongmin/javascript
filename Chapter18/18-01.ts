// 1. 함수는 무명의 리터럴로 생성할 수 있음
// 2. 함수는 변수에 저장할 수 있음.
// 런터임에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당됨

const increase = function (num) {
    return ++num;
};

const decrease = function (num) {
    return --num;
};

// 2. 함수는 객체에 저장할 수 있음
const auxs = {increase, decrease};

// 3. 함수는 매개변수에 전달할 수 있음
// 4. 함수는 반환값으로 사용할 수 있음
function makeCounter(aux) {
    let num = 0;

    return function () {
        num = aux(num);
        return num;
    };
}

// 3. 함수는 매개변수에 전달할 수 있음
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

// 3. 함수는 매개변수에 전달할 수 있음
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());
