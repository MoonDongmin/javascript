const arr = [1, 2, 3];

// Array.prototype.splice(삭제를 시작할 인덱스, 삭제할 요소수)
// arr[1] 부터 1개의 요소 제거
arr.splice(1, 1);
console.log(arr);

// length 프로퍼티가 자동 갱신
console.log(arr.length);