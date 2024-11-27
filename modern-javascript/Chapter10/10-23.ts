var obj = {
    name: 'Moon',
    sayHi: function () {
        console.log('Hi!' + this.name);
    }
};

obj.sayHi();