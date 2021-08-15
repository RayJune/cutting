const permute = require('./index');

test('define permute function', () => {
    expect(typeof permute).toBe('function');
});

test('input value is [1]', () => {
    expect(permute([1])).toEqual([[1]]);
});

test('input value is [1, 2]', () => {
    const inputArr = [1, 2];
    const permutations = permute(inputArr);

    expect(permutations).toHaveLength(2);
    expect(permute(inputArr)).toEqual(expect.arrayContaining([
        [1, 2],
        [2, 1]
    ]));
});

test('input value is [1, 2, 3]', () => {
    const inputArr = [1, 2, 3];
    const permutations = permute(inputArr);

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