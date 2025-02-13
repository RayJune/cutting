import generatePalindromes from './index';
// import generatePalindromes from './template';
// import generatePalindromes from './template-zh';

test('define generatePalindromes function', () => {
    expect(typeof generatePalindromes).toBe('function');
});

test('s = "aabb"', () => {
    const permutations = generatePalindromes('aabb');

    expect(permutations).toHaveLength(2);
    expect(permutations).toEqual(expect.arrayContaining(['abba', 'baab']));
});

test('s = "abc"', () => {
    expect(generatePalindromes('abc')).toEqual([]);
});

test('s = "a"', () => {
    expect(generatePalindromes('a')).toEqual(['a']);
});

test('s = "aaaaaa"', () => {
    expect(generatePalindromes('aaaaaa')).toEqual(['aaaaaa']);
});
