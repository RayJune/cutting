const reverseBits = require('./index');
// const reverseBits = require('./reverse');
// const reverseBits = require('./template');
// const reverseBits = require('./template-zh');

test('define reverseBits function', () => {
    expect(typeof reverseBits).toBe('function');
});

test('n = 00000010100101000001111010011100', () => {
    expect(reverseBits(0b00000010100101000001111010011100)).toBe(964176192);
})

test('n = 11111111111111111111111111111101', () => {
    expect(reverseBits(0b11111111111111111111111111111101)).toBe(3221225471);
});
