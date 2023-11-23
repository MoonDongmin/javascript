const array = [1, 2, 3];

console.log(Symbol.iterator in array);

for (const item of array) {
    console.log(item);
}

console.log([...array]);

const [a, ...rest] = array;
console.log(a, rest);