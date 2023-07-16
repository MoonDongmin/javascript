var prefix = 'prop';
var i = 0;


const obj = {
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i,
    [`${prefix}-${++i}`]: i
}

console.log(obj);