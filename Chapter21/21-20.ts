// 인수가 유한수이면 참을 반환
isFinite(0);
isFinite(2e64);
// @ts-ignore
isFinite('10');
isFinite(null);

// 인수가 무한수 또는 NaN으로 평가되면 거짓 반환
isFinite(Infinity);
isFinite(-Infinity);

// 인수가 NaN으로 평가되는 값이면 거짓 반환
isFinite(NaN);
// @ts-ignore
isFinite('Hello');
// @ts-ignore
isFinite('2005/12/12');