const obj = {x: 1};

// 객체 리터럴에 의해 생성된 obj 객체는 Object.prototype을 상속
console.log(obj.constructor === Object);
console.log(obj.hasOwnProperty('x'));