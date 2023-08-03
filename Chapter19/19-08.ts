// @ts-ignore
const parent = {};
const child = {};

// child의 프로토타입을 parent로 설정
// @ts-ignore
child.__proto__ = parent;

// parent의 프로포타입을 child로 설정
// @ts-ignore
parent.__proto__ = child;