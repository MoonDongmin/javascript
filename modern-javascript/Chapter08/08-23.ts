var string = 'Hello world.';
var search = 'l';
var count = 0;

for (var i = 0; i < string.length; i++) {
    if (string[i] !== search) continue;
    count++;
}

console.log(count);

// String.prototype.match 메서드를 사용해도 같은 동작을 함
const regexp = new RegExp(search, 'g');
console.log(string.match(regexp).length);