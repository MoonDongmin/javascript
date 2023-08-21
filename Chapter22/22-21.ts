function convertAgsToArray() {
    console.log(arguments);

    // arguments 객체를 배열로 변환
    // Array.prototype.slice를 인수 없이 호출하면 배열의 복사본 생성
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);

    return arr;
}

// @ts-ignore
convertAgsToArray(1, 2, 3);