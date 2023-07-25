let foo = 1;

{
    let foo = 2;
    let bar = 3;
}

console.log(foo);
// @ts-ignore
console.log(bar);