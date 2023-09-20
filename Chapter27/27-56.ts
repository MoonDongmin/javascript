class Queue {
    #array;

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is not an array.`);
        }
        this.#array = array;
    }

    // 큐의 가장 마지막 데이터를 밀어 넣음
    enqueue(value) {
        return this.#array.push(value);
    }

    // 큐의 가장 처음 데이터, 즉 가장 먼저 밀어 넣은 데이터를 꺼냄
    dequeue() {
        return this.#array.shift();
    }

    // 큐의 복사본 배열을 반환
    entries() {
        return [...this.#array];
    }
}

const queue = new Queue([1, 2]);
console.log(queue.entries());

queue.enqueue(3);
console.log(queue.entries());

queue.dequeue();
console.log(queue.entries());