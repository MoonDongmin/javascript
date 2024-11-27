var person = {
    name: "Moon"
};
var copy = person;

console.log(person === copy);

copy.name = 'Kim';

// @ts-ignore
person.address = 'GimCheon';

console.log(person);
console.log(copy);