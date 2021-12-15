const mySqrt = require('./index');
// const mySqrt = require('./template');
// const mySqrt = require('./template-zh');

test('define mySqrt function', () => {
    expect(typeof mySqrt).toBe('function');
});

test('x = 4', () => {
    expect(mySqrt(4)).toBe(2);
});

test('x = 8', () => {
    expect(mySqrt(8)).toBe(2);
});
