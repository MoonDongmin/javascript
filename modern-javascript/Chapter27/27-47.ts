const arr = [1, 2];

// arr.push(3)과 동일하게 처리. 하지만 이 방법이 더 빨라
arr[arr.length] = 3;
console.log(arr);