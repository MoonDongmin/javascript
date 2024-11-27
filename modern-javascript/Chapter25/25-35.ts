const person = {
    // 데이터 프로퍼티
    firstName: 'Dongmin',
    lastName: 'Moon',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    //setter 함수
    set fullName(name) {
        // 배열 디스트럭처링 할당
        [this.firstName, this.lastName] = name.split(' ');
    }
};

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${person.fullName} ${person.lastName}`);

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName에 값을 저장하면 setter 함수가 호출
person.fullName = 'Dongmin Moon';
console.log(person);

// 접근자 프로퍼티를 통한 프로퍼티 값으 ㅣ참조
// 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출
console.log(person.fullName);

// fullName은 접근자 프로퍼티임
// 접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰트를 가짐
console.log(Object.getOwnPropertyDescriptor(person, 'fullName'));
