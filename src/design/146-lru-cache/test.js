import LRUCache from './index';
// import LRUCache = require('./linked-hashmap');
// import LRUCache from './template';
// import LRUCache from './template-zh';

test('define LRUCache function', () => {
    expect(typeof LRUCache).toBe('function');
    expect(/^class/.test(LRUCache.toString())).toBe(true);
});

test('example 1', () => {
    const cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    expect(cache.get(1)).toBe(1);

    cache.put(3, 3);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(2)).toBe(-1);

    cache.put(4, 4);
    expect(cache.get(1)).toBe(-1);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(4)).toBe(4);
});

test('complete test coverage', () => {
    const cache = new LRUCache(1);

    cache.put(1, 1);
    cache.put(1, 2);
    cache.put(2, 2);
    expect(cache.get(2)).toBe(2);

    cache.put(3, 3);
    expect(cache.get(3)).toBe(3);
    expect(cache.get(1)).toBe(-1);
});
