// 유사 배열 객체를 반환하여 배열을 생성함
Array.from({length: 2, 0: 'a', 1: 'b'});

// 이터러블을 반환하여 배열을 생성함. 문자열은 이터러블임
Array.from('Hello');