class Prefixer {
    constructor(prefix) {
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item);
    }
}

const prefix = new Prefixer('-webkit-');
console.log(prefix.add(['transition', 'user-select']))