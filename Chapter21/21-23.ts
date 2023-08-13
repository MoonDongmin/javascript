// 문자열을 실수로 해석해 반환
parseFloat('3.14');
parseFloat('10.00');

// 공백으로 구분된 문자열은 첫 번째 문자열만 반환
parseFloat('34 45 66');
parseFloat('40 years');

// 첫 번째 문자열을 숫자로 변환할 수 없다면 NaN을 반환
parseFloat('He was 40');

// 앞뒤 공백은 무시됨
parseFloat(' 60');