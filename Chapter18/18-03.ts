function square(number) {
    return number * number;
}

// @ts-ignore
console.log(Object.getOwnPropertyDescriptor(square));

console.log(Object.getOwnPropertyDescriptor(square, '___proto__'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '___proto__'));
