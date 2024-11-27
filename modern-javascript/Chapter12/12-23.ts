function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 함');
    }

    return x + y;
}

// @ts-ignore
console.log(add(2));
console.log((add('a', 'b')));
