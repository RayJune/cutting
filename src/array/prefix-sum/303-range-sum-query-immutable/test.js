const NumArray = require('./index');
// const NumArray = require('./template');
// const NumArray = require('./template-zh');

test('define NumArray class', () => {
    expect(typeof NumArray).toBe('function');
    expect(/^class/.test(NumArray.toString())).toBe(true);
});

test('example 1', () => {
    const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);

    expect(numArr.sumRange(0, 2)).toBe(1);
    expect(numArr.sumRange(2, 5)).toBe(-1);
    expect(numArr.sumRange(0, 5)).toBe(-3);
});
