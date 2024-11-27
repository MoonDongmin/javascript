// 프로퍼티 f에 바인딩된 함수는 callable 이며 constructor 이다
var obj = {
    x: 10,
    f: function () {
        return this.x;
    }
}

// 프로퍼티 f에 바인딩된 함수를 메서드로 호출
console.log(obj.f());

// 프로퍼티 f에 바인딩된 함수를 일반 함수로서 호출
var bar = obj.f;
console.log(bar());

// 프로퍼티 f에 바인딩된 함수를 생성자 함수로서 호출
console.log(new obj.f());
