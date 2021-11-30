const isValid = require('./index');
// const isValid = require('./template');
// const isValid = require('./template-zh');

test('define isValid function', () => {
    expect(typeof isValid).toBe('function');
});

test('s = "{"', () => {
    expect(isValid('{')).toBe(false);
});

test('s = "()"', () => {
    expect(isValid('()')).toBe(true);
});

test('s = "(]"', () => {
    expect(isValid('(]')).toBe(false);
});

test('s = "([)]"', () => {
    expect(isValid('([)]')).toBe(false);
});

test('s = "{[]}"', () => {
    expect(isValid('{[]}')).toBe(true);
});
