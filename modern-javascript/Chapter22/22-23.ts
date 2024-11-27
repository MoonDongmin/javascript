const person = {
    name: "Moon",
    foo(callback) {
        setTimeout(callback, 100);
    }
};

person.foo(function () {
    console.log(`hi! my name is ${this.name}`);
})