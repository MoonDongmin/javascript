var person = {
    name: 'Moon'
};

// @ts-ignore
person.age = 20;

// @ts-ignore
delete person.age;

// @ts-ignore
delete person.address;

console.log(person);