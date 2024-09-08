import convert from './index';
// import convert from './template';
// import convert from './template-zh';

test('define convert function', () => {
    expect(typeof convert).toBe('function');
});

test('s = "PAYPALISHIRING", numRows = 3', () => {
    expect(convert('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR');
});

test('s = "PAYPALISHIRING", numRows = 4', () => {
    expect(convert('PAYPALISHIRING', 4)).toBe('PINALSIGYAHRPI');
});

test('s = "A", numRows = 1', () => {
    expect(convert('A', 1)).toBe('A');
});
