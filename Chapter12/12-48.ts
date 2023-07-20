function outer() {
    var x = 1;

    // 중첩 함수
    function inner() {
        var y = 2;
        console.log(x + y);
    }

    inner();
}

outer();