// import NumMatrix from './index';
import NumMatrix from './optimize';
// import NumMatrix from './template';
// import NumMatrix from './template-zh';

test('define NumMatrix class', () => {
    expect(typeof NumMatrix).toBe('function');
    expect(/^class/.test(NumMatrix.toString())).toBe(true);
});

test('example 1', () => {
    const numMatrix = new NumMatrix([
        [3, 0, 1, 4, 2],
        [5, 6, 3, 2, 1],
        [1, 2, 0, 1, 5],
        [4, 1, 0, 1, 7],
        [1, 0, 3, 0, 5]
    ]);

    expect(numMatrix.sumRegion(2, 1, 4, 3)).toBe(8);
    expect(numMatrix.sumRegion(1, 1, 2, 2)).toBe(11);
    expect(numMatrix.sumRegion(1, 2, 2, 4)).toBe(12);
});
