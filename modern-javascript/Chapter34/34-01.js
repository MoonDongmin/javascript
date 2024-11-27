const isIterable = v => v !== null && typeof v[Symbol.iterator] === "function";

// 배열, 문자열, Map, Set 등은 이터러블이다.
console.log(isIterable([]));
console.log(isIterable(""));
console.log(isIterable(new Map()));
console.log(isIterable(new Set()));
console.log(isIterable({}));
