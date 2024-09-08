import letterCombinations from './index';
// import letterCombinations from'./template';
// import letterCombinations from'./template-zh';

test('define letterCombinations function', () => {
    expect(typeof letterCombinations).toBe('function');
});

test('digits = "23"', () => {
    const combinations = letterCombinations('23');

    expect(combinations).toHaveLength(9);
    expect(combinations).toEqual(expect.arrayContaining([
        'ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'
    ]));
});

test('digits = ""', () => {
    expect(letterCombinations('')).toEqual([]);
});

test('digits = "2"', () => {
    const combinations = letterCombinations('2');

    expect(combinations).toHaveLength(3);
    expect(combinations).toEqual(expect.arrayContaining(['a', 'b', 'c']));
});
