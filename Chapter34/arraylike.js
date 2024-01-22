let arrayLike = {
    0: 'Hello',
    1: 'World',
    length: 2
};

let arr = Array.from(arrayLike);

for (let x of arr) {
    console.log(x);
}