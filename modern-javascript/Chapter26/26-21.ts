const person = (name => ({
    sayHi() {
        return `Hi! My name is ${name},`;
    }
}))('Moon');

console.log(person.sayHi());