// const judgeSquareSum = require('./index');
const judgeSquareSum = require('./optimize');
// const judgeSquareSum = require('./template');
// const judgeSquareSum = require('./template-zh');

test('define judgeSquareSum function', () => {
    expect(typeof judgeSquareSum).toBe('function');
});

test('c = 5', () => {
    expect(judgeSquareSum(5)).toBe(true);
});

test('c = 3', () => {
    expect(judgeSquareSum(3)).toBe(false);
});

test('c = 7', () => {
    expect(judgeSquareSum(7)).toBe(false);
});
