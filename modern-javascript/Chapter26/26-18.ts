const create = (id, content) => ({id, content});
create(1, 'JavaScript');

// 위의 표현식은 다음과 동일
const create2 = (id, content) => {
    return {id, content};
};