const o = {x: {y: 1}};

// 얕은 복사
const c1 = {...o};
console.log(c1 === o);
console.log(c1.x === o.x);

// @ts-ignore
const _ = require('lodash');

// 깉은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === o);
console.log(c2.x === o.x);