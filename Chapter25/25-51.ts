class Person {
    // private 필드 정의
    #name = '';

    constructor(name) {
        // private 필드 참조
        this.#name = name;
    }

    get name() {
        // private 필드를 참조하여 trim한 다음 반환
        return this.#name.trim();
    }
}

const me = new Person('Moon');

// private 필드는 #name은 클래스 외부에서 참조 불가
console.log(me.name);