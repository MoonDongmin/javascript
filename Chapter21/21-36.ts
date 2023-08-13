const uriComp = 'https://www.notion.so/moondongmin/Chapter-21-95dc3281f292457087a56a635496064e';

let enc = encodeURIComponent(uriComp);
console.log(enc);

let dec = decodeURIComponent(enc);
console.log(dec);

enc = encodeURI(uriComp);
console.log(enc);

dec = decodeURI(enc);
console.log(dec);