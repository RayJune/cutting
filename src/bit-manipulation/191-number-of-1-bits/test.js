// import hammingWeight from './index';
import hammingWeight from './optimize';
// import hammingWeight = require('./regex');
// import hammingWeight from './template';
// import hammingWeight from './template-zh';

test('define hammingWeight function', () => {
    expect(typeof hammingWeight).toBe('function');
});

test('n = 00000000000000000000000000001011', () => {
    expect(hammingWeight(0b00000000000000000000000000001011)).toBe(3);
});

test('n = 00000000000000000000000010000000', () => {
    expect(hammingWeight(0b00000000000000000000000010000000)).toBe(1);
});

test('n = 11111111111111111111111111111101', () => {
    expect(hammingWeight(0b11111111111111111111111111111101)).toBe(31);
});

test('n = 00000000000000000000000000000000', () => {
    expect(hammingWeight(0b00000000000000000000000000000000)).toBe(0);
});
