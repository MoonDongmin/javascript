// 완전한 URI
const uri = 'https://www.youtube.com/results?search_query=%EB%85%B8%EB%9E%98+%EC%BB%A4%EB%B2%84+%EB%AA%A8%EC%9D%8C';
// encodeURI 함수는 완전한 URI를 전달받아 이스케이프 처리를 위해 인코딩함
const enc = encodeURI(uri);
console.log(enc);