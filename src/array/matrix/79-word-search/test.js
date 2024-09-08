import exist from './index';
// import exist from './template';
// import exist from './template-zh';

test('define exist function', () => {
    expect(typeof exist).toBe('function');
});

test(`board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    word = "ABCCED"`, () => {
    const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

    expect(exist(board, 'ABCCED')).toBe(true);
});

test(`board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    word = "ABCCED"`, () => {
    const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

    expect(exist(board, 'SEE')).toBe(true);
});

test(`board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    word = "ABCCED"`, () => {
    const board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];

    expect(exist(board, 'ABCB')).toBe(false);
});
