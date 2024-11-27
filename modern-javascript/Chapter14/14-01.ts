function foo() {
    var x = 'local';
    console.log(x);
    return x;
}

foo();
// @ts-ignore
console.log(x);