class Person1 {
    // 생서자
    constructor(name) {
        // 인스턴스 생성 및 초기화
        // @ts-ignore
        this.name = name;
    }
}

// 생성자 함수
function Person2(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
}