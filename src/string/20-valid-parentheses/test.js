import isValid from './index';
// import isValid from './template';
// import isValid from './template-zh';

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
