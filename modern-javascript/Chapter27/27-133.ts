const arr = ["hello", "world"];

const a = arr.map(x => x.split("")).flat();

const b = arr.flatMap(x => x.split(""));

console.log(a);
console.log(b); 