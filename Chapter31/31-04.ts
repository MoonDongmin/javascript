const count = (str, char) => (str.match(new RegExp(char, "gi")) ?? []).length;

console.log(count("Is this all there is?", "is"));
console.log(count("Is this all there is?", "xx"));
