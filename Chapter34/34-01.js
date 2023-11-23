const isIterable = v => v !== null && typeof v[Symbol.iterator] === "function";

// 배열, 문자열, Map, Set등은 이터러블임
isIterable([]);
isIterable("");
isIterable(new Map());
isIterable(new Set());
isIterable({});
