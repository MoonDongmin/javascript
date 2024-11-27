const obj = {
    name: 'Moon',
    sayHi() {
        console.log("Hi!" + this.name)
    }
};

obj.sayHi();