function sum(...args) {
    // Rest 파라미터는 args에는 배열 [1,2,3,4,5]가 할당
    return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));