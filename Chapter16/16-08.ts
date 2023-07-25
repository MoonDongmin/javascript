const person = {};

Object.defineProperty(person, 'firstName', {
    value: 'Dongmin',
    writable: true,
    enumerable: true,
    configurable: true
});

Object.defineProperty(person, 'lastName', {
    value: 'Moon'
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log('firstName', descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

console.log(Object.keys(person));

// @ts-ignore
person.lastName = "kim";
// @ts-ignore
delete person.lasName;

descriptor = Object.getOwnPropertyDescriptor(person, 'lastName');
console.log('lastName', descriptor);

Object.defineProperty(person, 'fullName', {
    get() {
        return `${this.firstName} ${this.lastName}`;
    },

    set(name) {
        [this.firstName, this.lastName] = name.split(' ');
    },
    enumerable: true,
    configurable: true
})

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log('fullName', descriptor);

// @ts-ignore
person.fullName = "Heegun Lee";
console.log(person)
