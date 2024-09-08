import generateParenthesis from './index';
// import generateParenthesis from './template';
// import generateParenthesis from './template-zh';

test('define generateParenthesis function', () => {
    expect(typeof generateParenthesis).toBe('function');
});

test('n = 3', () => {
    const result = generateParenthesis(3);

    expect(result).toHaveLength(5);
    expect(result).toEqual(expect.arrayContaining([
        '((()))',
        '(()())',
        '(())()',
        '()(())',
        '()()()'
    ]));
});

test("n = 1", () => {
    expect(generateParenthesis(1)).toEqual(['()']);
});
