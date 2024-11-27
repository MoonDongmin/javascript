const arr = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열 인덱스 1부터 3이전까지 요소로 채움
arr.fill(0, 1, 3);

// fill 메서드는 우너본 배열을 직접 변경
console.log(arr);