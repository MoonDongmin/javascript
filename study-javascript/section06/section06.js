/*
* 1. 인자로 주어진 문자열에서 첫 번째 대문자를 찾아 로그로 출력하는 함수를 작성해보세요.
* 문자열에는 알파벳만 포함된다고 가정합니다.
* */
function findFirstCapital(str) {
  for (let x of str) {
    if (x.toLowerCase() !== x) {
      console.log(x);
    }
  }
}

findFirstCapital('helloWorld'); // W
findFirstCapital('helloworld'); // 대문자 없음

/*
* 2. 인자로 주어진 문장에 포함된 모든 단어들의 마지막 글자를 출력하는 함수를 작성해보세요.
* */

function printLastChars(str) {
  let splitStr = str.split(' ');
  for (let x of splitStr) {
    console.log(x.slice(-1));
  }
}

printLastChars('Hello world from JavaScript');

/*
* 3. 각 요소가 숫자라면 그것이 정수 또는 실수임을 출력하도록 코드를 작성해보세요.
* 실수라면 소수 두 자리까지만 나타내세요.
* */
const arr = [1, 'text', 3.14, 5, {key: 'value'}, 6.28732, 7];
for (let x of arr) {
  if (!isNaN(x)) {
    if (Number.isInteger(x)) {
      console.log(`정수: ${x}`);
    } else {
      console.log(`실수: ${x.toFixed(2)}`);
    }
  }
}

/*
* 4. 인자로 주어진 반지름으로 원의 넓이를 출력하는 함수를 작성하세요. (원주율 * 반지름의 제곱)
* */
function calculateCircleArea(num) {
  console.log(Math.PI * Math.pow(num, 2));
}

calculateCircleArea(5); // 78.53981633974483

/*
* 5. 2분의 1 확률로 true 또는 false 를 출력하는 코드를 작성해보세요.
* */
console.log(Math.random() > 0.5);
