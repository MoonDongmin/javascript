const person = {
    name: 'Moon',
    address: 'Daejeon'
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}