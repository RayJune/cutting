// const MyHashMap = require('./index');
const MyHashMap = require('./optimize');
// const MyHashMap = require('./template');
// const MyHashMap = require('./template-zh');

test('define MyHashMap function', () => {
    expect(typeof MyHashMap).toBe('function');
    expect(/^class/.test(MyHashMap.toString())).toBe(true);
});

test('Example 1', () => {
    const set = new MyHashMap();

    set.put(1, 1);
    set.put(2, 2);

    expect(set.get(1)).toBe(1);
    expect(set.get(2)).toBe(2);

    set.put(2, 1);
    expect(set.get(2)).toBe(1);

    set.remove(2);
    expect(set.get(2)).toBe(-1);
});


test('complete test coverage', () => {
    const set = new MyHashMap();

    set.put(1, 1);
    set.put(2, 1);
    set.put(770, 2);
    set.put(1, 2);
    set.put(1539, 1);

    expect(set.get(1)).toBe(2);
    expect(set.get(770)).toBe(2);
    expect(set.get(1539)).toBe(1);

    set.remove(3);
    expect(set.get(3)).toBe(-1);
    set.remove(1);
    expect(set.get(1)).toBe(-1);

    set.remove(1539);
    expect(set.get(1539)).toBe(-1);
    set.remove(770);
    expect(set.get(770)).toBe(-1);
    set.put(1, 1);
    set.put(770, 1);
    set.put(1539, 1);
    set.remove(1539);
    expect(set.get(1539)).toBe(-1);
});
