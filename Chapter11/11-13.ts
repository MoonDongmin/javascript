var person = {
    name: "Moon"
};

person.name = 'Kin';

// @ts-ignore
person.address = 'Gimcheon';

console.log(person);