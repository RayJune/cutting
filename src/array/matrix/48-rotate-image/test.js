import rotate from './index';
// import rotate from './template';
// import rotate from './template-zh';

test('define rotate function', () => {
    expect(typeof rotate).toBe('function');
});

test('matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    rotate(matrix);
    expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
});

test('matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]', () => {
    const matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]];

    rotate(matrix);
    expect(matrix).toEqual([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]);
});
