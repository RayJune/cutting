const multiply = require('./index');
// const multiply = require('./template');
// const multiply = require('./template-zh');

test('define multiply function', () => {
    expect(typeof multiply).toBe('function');
});

test('num1 = "2", num2 = "3"', () => {
    expect(multiply('2', '3')).toBe('6');
});

test('num1 = "123", num2 = "456"', () => {
    expect(multiply('123', '456')).toBe('56088');
});

test('num1 = "999", num2 = "0', () => {
    expect(multiply('999', '0')).toBe('0');
});
