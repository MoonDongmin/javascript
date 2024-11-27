function Person(name, age){
    this.name = name;
    let _age = age;

    //인스턴스 메서드
    this.sayHi = function (){
        console.log(`Hi My name is ${this.name}. I am ${_age}.`);
    };
}

const me =new Person('Moon',24);
me.sayHi();
console.log(me.name);
console.log(me._age);

const you = new Person('Kim',20);
you.sayHi();