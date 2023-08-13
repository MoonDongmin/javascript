const uri = 'https://www.notion.so/moondongmin/Chapter-21-95dc3281f292457087a56a635496064e';
const enc = encodeURI(uri);
// decodeURI 함수는 인코딩된 완전한 URI를 전달받아 이스케이프 처리 이전으로 디코딩
const dec = decodeURI(enc);
console.log(dec);