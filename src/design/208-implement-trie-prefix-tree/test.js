import Trie from './index';
// import Trie from './template';
// import Trie from './template-zh';

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
    expect(trie.startsWith('epp')).toBe(false);
    trie.insert('app');
    expect(trie.search('app')).toBe(true);
});
