class Base {
}

class Derived {
    constructor() {
        // error
        this.a = 1;
        super();
    }
}

const derived = new Derived(1);
