// Symbol 함수를 호출하여 유일무이한 심벌 값을 생성함
const mySymbol = Symbol();
console.log(typeof mySymbol);

// 심벌 값은 외부로 노출되지 않아 확인할 수 없음
console.log(mySymbol);