// 화살표 함수는 non-constructor
const Person = name => {
    // @ts-ignore
    this.name = name;
};

// @ts-ignore
console.log(Pseron.prototype); // undefined