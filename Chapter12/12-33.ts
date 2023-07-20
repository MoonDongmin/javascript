function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Moon';
}

var num = 100;
var person = {name: 'Kim'};

console.log(num);
console.log(person);

changeVal(num, person);

console.log(num);
console.log(person);