const reverse = require('./index');
// const reverse = require('./reverse');
// const reverse = require('./template');
// const reverse = require('./template-zh');

test('define reverse function', () => {
    expect(typeof reverse).toBe('function');
});

test('x = 123', () => {
    expect(reverse(123)).toBe(321);
});

test('x = -123', () => {
    expect(reverse(-123)).toBe(-321);
});

test('x = 120', () => {
    expect(reverse(120)).toBe(21);
});

test('x = 0', () => {
    expect(reverse(0)).toBe(0);
});

test('x = 2 ** 31', () => {
    expect(reverse(2 ** 31)).toBe(0);
});

test('x = (-2) ** 31 - 1', () => {
    expect(reverse((-2) ** 31 - 1)).toBe(0);
});
