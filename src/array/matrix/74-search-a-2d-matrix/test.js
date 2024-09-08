import searchMatrix from './index';
// import searchMatrix from './template';
// import searchMatrix from './template-zh';

test('define searchMatrix function', () => {
    expect(typeof searchMatrix).toBe('function');
});

test('matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3', () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

    expect(searchMatrix(matrix, 3)).toBe(true);
});

test('matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 13', () => {
    const matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

    expect(searchMatrix(matrix, 13)).toBe(false);
});
