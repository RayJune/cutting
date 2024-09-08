import combinationSum2 from './index';
// import combinationSum2 from './template';
// import combinationSum2 from './template-zh';

test('define combinationSum2 function', () => {
    expect(typeof combinationSum2).toBe('function');
});

test('candidates = [1], target = 1', () => {
    expect(combinationSum2([1], 1)).toEqual([[1]]);
});

test('candidates = [2, 5, 2, 1, 2], target = 5', () => {
    const candidates = [2, 5, 2, 1, 2];
    const sortedCombinations = combinationSum2(candidates, 5)
        .map(item => item.sort()).sort();

    expect(sortedCombinations).toEqual([
        [1, 2, 2],
        [5]
    ]);
});

test('candidates = [3, 1, 3, 5, 1, 1], target = 8', () => {
    const candidates = [3, 1, 3, 5, 1, 1];
    const sortedCombinations = combinationSum2(candidates, 8)
        .map(item => item.sort()).sort();

    expect(sortedCombinations).toEqual([
        [1, 1, 1, 5],
        [1, 1, 3, 3],
        [3, 5]
    ]);
});

test('candidates = [10, 1, 2, 7, 6, 1, 5], target = 8', () => {
    const candidates = [10, 1, 2, 7, 6, 1, 5];
    const sortedCombinations = combinationSum2(candidates, 8)
        .map(item => item.sort()).sort();

    expect(sortedCombinations).toEqual([
        [1, 1, 6],
        [1, 2, 5],
        [1, 7],
        [2, 6]
    ]);
});

test('candidates = [4, 1, 1, 4, 4, 4, 4, 2, 3, 5], target = 10', () => {
    const candidates = [4, 1, 1, 4, 4, 4, 4, 2, 3, 5];
    const sortedCombinations = combinationSum2(candidates, 10)
        .map(item => item.sort()).sort();

    expect(sortedCombinations).toEqual([
        [1, 1, 3, 5],
        [1, 1, 4, 4],
        [1, 2, 3, 4],
        [1, 4, 5],
        [2, 3, 5],
        [2, 4, 4]
    ]);
});
