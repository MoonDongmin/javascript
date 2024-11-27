class Person {
    constructor(name, address) {
        // 인스로 인스턴스 초기화
        this.name = name;
        this.address = address;
    }
}

// 인수로 초기값을 전달함. 초기값은 생성자함수에 전달됨
const me = new Person('Moon', 'Daejon');
console.log(me);