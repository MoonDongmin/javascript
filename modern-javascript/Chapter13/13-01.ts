function add(x, y) {
    console.log(x, y);
    return x + y;
}

add(2, 5);

// 매개변수는 함수 몸체 내부에서만 참조할 수 있음
// @ts-ignore
console.log(x, y);