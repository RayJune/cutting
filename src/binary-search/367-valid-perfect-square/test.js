const isPerfectSquare = require('./index');
// const isPerfectSquare = require('./template');
// const isPerfectSquare = require('./template-zh');

test('define isPerfectSquare function', () => {
    expect(typeof isPerfectSquare).toBe('function');
});

test('num = 16', () => {
    expect(isPerfectSquare(16)).toBe(true);
});

test('num = 14', () => {
    expect(isPerfectSquare(14)).toBe(false);
});
