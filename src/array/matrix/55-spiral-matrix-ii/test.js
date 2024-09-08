import generateMatrix from './index';
// import generateMatrix from './template';
// import generateMatrix from './template-zh';

test('define generateMatrix function', () => {
    expect(typeof generateMatrix).toBe('function');
});

test('n = 3', () => {
    expect(generateMatrix(3)).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
});

test('n = 1', () => {
    expect(generateMatrix(1)).toEqual([[1]]);
});
