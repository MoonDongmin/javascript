// 함수 개체는 prototype 프로퍼티를 소유
(function (){}).hasOwnProperty('prototype');

// 일반 객체는 prototype 프로퍼티를 소유하지 않음
({}).hasOwnProperty('prototype');