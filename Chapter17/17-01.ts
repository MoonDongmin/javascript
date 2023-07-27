const person = new Object();

// @ts-ignore
person.name = 'Moon';
// @ts-ignore
person.sayHello = function () {
    console.log('Hi! My name is' + this.name);
}

console.log(person);
// @ts-ignore
person.sayHello();