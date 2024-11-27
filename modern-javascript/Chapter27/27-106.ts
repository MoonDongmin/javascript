const numbers = [1, 4, 9];

// map 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출
// 그리고 콜백 함수의 반환값들로 구성된 새로운 배열 반환
const roots = numbers.map(item => Math.sqrt(item));

console.log(roots);