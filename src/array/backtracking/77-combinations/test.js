import combine from './index';
// import combine from './template';
// import combine from './template-zh';

test('define combinationSum function', () => {
    expect(typeof combine).toBe('function');
});

test('n = 1, k = 1', () => {
    expect(combine(1, 1)).toEqual([[1]]);
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

test('n = 5, k = 3', () => {
    const sortedCombinations = combine(5, 3).map(item => item.sort()).sort();
    expect(sortedCombinations).toEqual([
        [1, 2, 3],
        [1, 2, 4],
        [1, 2, 5],
        [1, 3, 4],
        [1, 3, 5],
        [1, 4, 5],
        [2, 3, 4],
        [2, 3, 5],
        [2, 4, 5],
        [3, 4, 5]
    ]);
});
