var x = 5, result;

// 선할당 후 증가
result = x++;
console.log(result, x);

// 선증가 후 할당
result = ++x;
console.log(result, x);

// 선할당 후 감소
result = x--;
console.log(result, x);

// 선감소 후 할당
result = --x;
console.log(result, x);