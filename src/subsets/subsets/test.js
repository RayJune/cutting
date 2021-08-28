const subsets = require('./index');
// const subsets = require('./template');
// const subsets = require('./template-zh');

test('define subsets function', () => {
    expect(typeof subsets).toBe('function');
});

test('nums = [0]', () => {
    const output = subsets([0]);

    expect(output).toHaveLength(2);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [0]
    ]))
});

test('nums = [1, 2]', () => {
    const output = subsets([1, 2]);

    expect(output).toHaveLength(4);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2]
    ]))
});

test('nums = [1, 2, 3]', () => {
    const output = subsets([1, 2, 3]);

    expect(output).toHaveLength(8);
    expect(output).toEqual(expect.arrayContaining([
        [],
        [1],
        [2],
        [1, 2],
        [3],
        [1, 3],
        [2, 3],
        [1, 2, 3]
    ]))
});