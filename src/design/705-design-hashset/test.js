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


test('complete test coverage', () => {
    const set = new MyHashSet();

    set.add(1);
    set.add(2);
    set.add(770);
    set.add(1);
    set.add(1539);
    set.add(1539);

    expect(set.contains(1)).toBe(true);
    expect(set.contains(2)).toBe(true);
    expect(set.contains(3)).toBe(false);
    expect(set.contains(770)).toBe(true);
    expect(set.contains(1539)).toBe(true);


    set.remove(3);
    expect(set.contains(3)).toBe(false);
    set.remove(1);
    expect(set.contains(1)).toBe(false);
    set.remove(1539);
    expect(set.contains(1539)).toBe(false);
    set.remove(770);
    expect(set.contains(770)).toBe(false);
    set.add(1);
    expect(set.contains(1)).toBe(true);
    set.add(770);
    expect(set.contains(770)).toBe(true);
    set.add(1539);
    expect(set.contains(1539)).toBe(true);
    set.remove(1539);
    expect(set.contains(1539)).toBe(false);
});
