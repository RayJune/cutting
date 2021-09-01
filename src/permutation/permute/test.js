// const permute = require('./index');
const permute = require('./optimize');
// const permute = require('./template');
// const permute = require('./template-zh');


test('define permute function', () => {
    expect(typeof permute).toBe('function');
});

test('input value is [1]', () => {
    expect(permute([1])).toEqual([[1]]);
});

test('input value is [1, 2]', () => {
    const permutations = permute([1, 2]);

    expect(permutations).toHaveLength(2);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2],
        [2, 1]
    ]));
});

test('input value is [1, 2, 3]', () => {
    const permutations = permute([1, 2, 3]);

    expect(permutations).toHaveLength(6);
    expect(permutations).toEqual(expect.arrayContaining([
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1]
    ]));
});
