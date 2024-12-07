// 1.
function max1(a, b) {
  return a > b ? a : b;
}

const max2 = function (a, b) {
  return a > b ? a : b;
}

const max3 = (a, b) => a > b ? a : b;

// 2.
function funEach(func, arr) {
  func(arr);
}

function funEach2(func, arr) {
  for (let x of arr) {
    func(x);
  }
}

funEach2(console.log, [1, 2, 3]);
