class Stack {
    // privat 클래스 멤버
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array`);
        }
        this.#array = array;
    }

    // 스택의 가장 마지막에 데이터를밀어 넣음
    push(value) {
        return this.#array.push(value);
    }

    // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼냄
    pop() {
        return this.#array.pop();
    }

    // 스택의 복사본 배열을 반환
    entries() {
        return [...this.#array];
    }
}

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());