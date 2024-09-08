import reverseWords from './index';
// import reverseWords from './template';
// import reverseWords from './template-zh';

test('define reverseWords function', () => {
    expect(typeof reverseWords).toBe('function');
});

test('s = "the sky is blue"', () => {
    expect(reverseWords('the sky is blue')).toBe('blue is sky the');
});

test('s = "  hello world  "', () => {
    expect(reverseWords('  hello world  ')).toBe('world hello');
});

test('s = "a good   example"', () => {
    expect(reverseWords('a good   example')).toBe('example good a');
});
