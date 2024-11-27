const number = [1, 2, 3];
const pows = [];

// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출함
number.forEach(item => pows.push(item ** 2));
console.log(pows);