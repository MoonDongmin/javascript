const arr = [1, 2, 3,];
// @ts-ignore
arr.x = 10;

for (const i in arr) {
    console.log(arr[i]);
}
;

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(v => console.log(v));

