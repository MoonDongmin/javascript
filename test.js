let a = [10, 11, 12, 13, 14, 15];
Array.from(a,(i)=>console.log(i))
// a.from( (v, i)=> {
//     console.log(v, i); // v = 값, i = 인덱스, 그리고 이 함수는 콜백함수의 내부임
// }); // 호출