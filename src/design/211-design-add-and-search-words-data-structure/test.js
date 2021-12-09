const WordDictionary = require('./index');
// const WordDictionary = require('./template');
// const WordDictionary = require('./template-zh');

test('define WordDictionary class', () => {
    expect(typeof WordDictionary).toBe('function');
    expect(/^class/.test(WordDictionary.toString())).toBe(true);
});

test('Example 1', () => {
    const wordDictionary = new WordDictionary();

    wordDictionary.addWord('bad');
    wordDictionary.addWord('dad');
    wordDictionary.addWord('mad');
    wordDictionary.addWord('madd');
    expect(wordDictionary.search('pad')).toBe(false);
    expect(wordDictionary.search('bad')).toBe(true);
    expect(wordDictionary.search('.ad')).toBe(true);
    expect(wordDictionary.search('b..')).toBe(true);
});
