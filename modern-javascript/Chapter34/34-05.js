// const array = [1, 2, 3];
//
// const iterator = array[Symbol.iterator]();
//
// console.log('next' in iterator);

const arr = [1, 2, 3];

const iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

