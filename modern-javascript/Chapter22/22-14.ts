const person = {
    name: 'Moon',
    getName(): string {
        // 메서드 내부의 this는 메서드를 호출한 객체에 바인딩됨
        return this.name;
    }
};

// 메서드는 getName을 호출한 객체는 person임
console.log(person.getName());

