function sum() {
    let res = 0;

    // arguments 객체는 length 프로퍼티가 있는 유사 배열 객체이기에 for 문으로 순회할 수 있음
    for (let i = 0; i < arguments.length; i++) {
        res += arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2, 3,));