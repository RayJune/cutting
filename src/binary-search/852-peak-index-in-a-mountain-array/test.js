const peakIndexInMountainArray = require('./index');
// const peakIndexInMountainArray = require('./template');
// const peakIndexInMountainArray = require('./template-zh');

test('define peakIndexInMountainArray function', () => {
    expect(typeof peakIndexInMountainArray).toBe('function');
});

test('arr = [0, 1, 0]', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

test('arr = [0, 2, 1, 0]', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});

test('arr = [0, 10, 5, 2]', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
});
