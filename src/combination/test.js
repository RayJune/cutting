// const combine = require('./index');
// const combine = require('./optimize');
const combine = require('./optimize2');


test('define combinationSum function', () => {
    expect(typeof combine).toBe('function');
});

test('n = 4, k = 2', () => {
    const sortedCombinations = combine(4, 2).map(item => item.sort()).sort();
    expect(sortedCombinations).toEqual([
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4]
    ]);
});

test('n = 1, k = 1', () => {
    expect(combine(1, 1)).toEqual([[1]]);
});
