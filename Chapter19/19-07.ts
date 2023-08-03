const person = {name: 'Moon'};

console.log(person.hasOwnProperty('__proto__'));

console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// @ts-ignore
console.log({}.__proto__ === Object.prototype);