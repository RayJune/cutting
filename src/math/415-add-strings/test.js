const addStrings = require('./index');
// const addStrings = require('./template');
// const addStrings = require('./template-zh');

test('define addStrings function', () => {
    expect(typeof addStrings).toBe('function');
});

test('num1 = "11", num2 = "123"', () => {
    expect(addStrings('11', '123')).toBe('134');
});

test('num1 = "456", num2 = "77"', () => {
    expect(addStrings('456', '77')).toBe('533');
});

test('num1 = "0", num2 = "0"', () => {
    expect(addStrings('0', '0')).toBe('0');
});

test('num1 = "1", num2 = "9"', () => {
    expect(addStrings('1', '9')).toBe('10');
});
