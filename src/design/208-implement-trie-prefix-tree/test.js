const Trie = require('./index');
// const Trie = require('./template');
// const Trie = require('./template-zh');

test('define Trie class', () => {
    expect(typeof Trie).toBe('function');
    expect(/^class/.test(Trie.toString())).toBe(true);
});

test('Example 1', () => {
    const trie = new Trie();

    trie.insert('apple');
    expect(trie.search('apples')).toBe(false);
    expect(trie.search('apple')).toBe(true);
    expect(trie.search('app')).toBe(false);
    expect(trie.startsWith('app')).toBe(true);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
});
