// const addBinary = require('./index');
const addBinary = require('./optimize');
// const addBinary = require('./bit');
// const addBinary = require('./template');
// const addBinary = require('./template-zh');

test('define addBinary function', () => {
    expect(typeof addBinary).toBe('function');
});

test('a = "11", b = "1"', () => {
    expect(addBinary('11', '1')).toBe('100');
});

test('a = "1010", b = "1011"', () => {
    expect(addBinary('1010', '1011')).toBe('10101');
});

test('a = "1", b = "0"', () => {
    expect(addBinary('1', '0')).toBe('1');
});

test('大于 Number.MAX_SAFE_INTEGER 的数', () => {
    const a = '10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101';
    const b = '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000';
    const result = '111010001100110111111100000110110110011000011111001000000011010101001101001101101000100010100001101';

    expect(addBinary(a, b)).toBe(result);
});
