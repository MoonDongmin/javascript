const person = {
    name: 'Moon',
    foo(callback) {
        // bind 메서드로 callback 함수 내부의 this 바인딩을 전달
        setTimeout(callback.bind(this), 100);
    }
};

person.foo(function () {
    console.log(`hi! my name is ${this.name}`);
});