const target = "Is this all there is? ";

// 패턴: is
// 플래그: i => 대소문자를 구별하지 않고 검색
const regExp = /is/i;

// test 메서드는 target 문자열에 대한 정규 표현식 regexp의 패턴을 검새하여 매칭 결과를
// 불리언 값으로 반환
regExp.test(target);