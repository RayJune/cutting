// const combinationSum = require('./index');
const combinationSum = require('./optimize');

test('define combinationSum function', () => {
    expect(typeof combinationSum).toBe('function');
});

test('candidates = [2], target = 1', () => {
    expect(combinationSum([2], 1)).toEqual([]);
});

test('candidates = [1], target = 1', () => {
    expect(combinationSum([1], 1)).toEqual([[1]]);
});

test('candidates = [1], target = 2', () => {
    expect(combinationSum([1], 2)).toEqual([[1, 1]]);
});

test('candidates = [2, 3, 5], target = 8', () => {
    const sum = combinationSum([2, 3, 5], 8);
    const sortedSum = sum.map(item => item.sort()).sort();

    expect(sortedSum).toEqual([
        [2, 2, 2, 2],
        [2, 3, 3],
        [3, 5]
    ]);
});

test('candidates = [2, 3, 6, 7], target = 7', () => {
    const sum = combinationSum([2, 3, 6, 7], 7);
    const sortedSum = sum.map(item => item.sort()).sort();

    expect(sortedSum).toEqual([
        [2, 2, 3],
        [7]
    ]);
});

test('candidates = [3, 12, 9, 11, 6, 7, 8, 5, 4], target = 15', () => {
    const sum = combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15);
    const sortedSum = sum.map(item => item.sort()).sort();

    expect(sortedSum).toEqual(expect.arrayContaining([
        [11, 4],
        [12, 3],
        [3,3,3,3,3],
        [3,3,3,6],
        [3,3,4,5],
        [3,3,9],
        [3,4,4,4],
        [3,4,8],
        [3,5,7],
        [3,6,6],
        [4,4,7],
        [4,5,6],
        [5,5,5],
        [6,9],
        [7,8]
    ]));
});