// 카운트 상태 변경 함수
const increase = function () {
    let num = 0;
    // 카운트 상태를 1만큰 증가
    return ++num;
}

// 이전 상태 유지 못함
console.log(increase());
console.log(increase());
console.log(increase());