const person = {
    name: 'Moon',
    address: 'Daejeon',
    __proto__: {age: 20}
};

for (const k in person) {
    console.log(k + ": " + person[k]);
}