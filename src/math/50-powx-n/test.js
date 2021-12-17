// const myPow = require('./index');
const myPow = require('./optimize');
// const myPow = require('./template');
// const myPow = require('./template-zh');

test('define myPow function', () => {
    expect(typeof myPow).toBe('function');
});

test('x = 2.00000, n = 10', () => {
    expect(myPow(2, 10)).toBe(1024);
});

test('x = 2.10000, n = 3', () => {
    // 由于 JS 小数乘法精度问题，这里特殊处理一下
    expect(Number(myPow(2.1, 3).toFixed(10))).toEqual(9.261);
});

test('x = 2.00000, n = -2', () => {
    expect(myPow(2, -2)).toBe(0.25);
});

test('x = 1, n = 0', () => {
    expect(myPow(1, 0)).toBe(1);
});
