const person = {
    name: 'Moon',
    address: 'Daejeon'
};

console.log('name' in person);
console.log('address' in person);
console.log('age' in person);
console.log(person.hasOwnProperty('name'));

const person2={name:'Moon'};
// @ts-ignore
console.log(Reflect.has(person2,'name'));