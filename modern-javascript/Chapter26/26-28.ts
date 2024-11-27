import * as timers from "timers";

class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        // add 메서드는 인수로 전달된 배열 arr을 순회하며 배여르이 모든 요소에 prefix를 추가함
        // 1
        return arr.map(function (item) {
            return this.prefix + item; // 2
            // TypeError
        });
    }
}

const prefix = new Prefixer('-webkit-');
console.log(prefix.add(['transition', 'user-select']));