// import isPowerOfTwo from './index';
import isPowerOfTwo from './optimize';
// import isPowerOfTwo = require('./trick');
// import isPowerOfTwo = require('./regex');
// import isPowerOfTwo from './template';
// import isPowerOfTwo from './template-zh';

test('define isPowerOfTwo function', () => {
    expect(typeof isPowerOfTwo).toBe('function');
});

test('n = 0', () => {
    expect(isPowerOfTwo(0)).toBe(false);
});

test('n = 1', () => {
    expect(isPowerOfTwo(1)).toBe(true);
});

test('n = 16', () => {
    expect(isPowerOfTwo(16)).toBe(true);
});

test('n = 3', () => {
    expect(isPowerOfTwo(3)).toBe(false);
});

test('n = 4', () => {
    expect(isPowerOfTwo(4)).toBe(true);
});

test('n = 5', () => {
    expect(isPowerOfTwo(5)).toBe(false);
});
