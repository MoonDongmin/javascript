// @ts-ignore
const sym = Symbol();
const obj = {
    a: 1,
    [sym]: 10
};

for (const k in obj) {
    console.log(k + ": " + obj[k]);
}