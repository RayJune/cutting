import myAtoi from './index';
// import myAtoi = require('./parse-int');
// import myAtoi = require('./regex');
// import myAtoi from './template';
// import myAtoi from './template-zh';

test('define myAtoi function', () => {
    expect(typeof myAtoi).toBe('function');
});

test('s = "42"', () => {
    expect(myAtoi('42')).toBe(42);
});

test('s = "   -42"', () => {
    expect(myAtoi('   -42')).toBe(-42);
});

test('s = "4193 with words"', () => {
    expect(myAtoi('4193 with words')).toBe(4193);
});

test('s = "words and 987"', () => {
    expect(myAtoi('words and 987')).toBe(0);
});

test('s = "-91283472332"', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648);
});

test('s = "91283472332"', () => {
    expect(myAtoi('91283472332')).toBe(2147483647);
});

test('s = "   +42"', () => {
    expect(myAtoi('   +42')).toBe(42);
});
