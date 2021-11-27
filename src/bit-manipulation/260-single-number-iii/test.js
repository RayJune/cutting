// const singleNumber = require('./index');
const singleNumber = require('./optimize');
// const singleNumber = require('./template');
// const singleNumber = require('./template-zh');

test('define singleNumber function', () => {
    expect(typeof singleNumber).toBe('function');
});

test('nums = [1, 2, 1, 3, 2, 5]', () => {
    const result = singleNumber([1, 2, 1, 3, 2, 5]);

    expect(result).toHaveLength(2);
    expect(result).toEqual(expect.arrayContaining([3, 5]));
});

test('nums = [-1, 0]', () => {
    const result = singleNumber([-1, 0]);

    expect(result).toHaveLength(2);
    expect(singleNumber([-1, 0])).toEqual(expect.arrayContaining([-1, 0]));
});

test('nums = [0, 1]', () => {
    const result = singleNumber([0, 1]);

    expect(result).toHaveLength(2);
    expect(singleNumber([0, 1])).toEqual(expect.arrayContaining([0, 1]));
});
