const generateParenthesis = require('./index');
// const generateParenthesis = require('./template');
// const generateParenthesis = require('./template-zh');

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
