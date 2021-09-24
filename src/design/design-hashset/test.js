// const MyHashSet = require('./index');
const MyHashSet = require('./optimize');
// const MyHashSet = require('./template');
// const MyHashSet = require('./template-zh');

test('define MyHashSet function', () => {
    expect(typeof MyHashSet).toBe('function');
    expect(/^class/.test(MyHashSet.toString())).toBe(true);
});

test('Example 1', () => {
    const set = new MyHashSet();

    set.add(1);
    set.add(2);

    expect(set.contains(1)).toBe(true);
    expect(set.contains(3)).toBe(false);

    set.add(2);

    expect(set.contains(2)).toBe(true);

    set.remove(2);
    expect(set.contains(2)).toBe(false);
});
