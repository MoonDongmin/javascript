const set = new Set([1, 2, 3]);
for (let a of set) console.log(a);

const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const iter = map[Symbol.iterator]();
console.log(iter.next());

for (let a of map) console.log(a);