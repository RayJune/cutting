// const singleNumber = require('./index');
// const singleNumber = require('./hash-map');
const singleNumber = require('./optimize');
// const singleNumber = require('./template');
// const singleNumber = require('./template-zh');

// test('define singleNumber function', () => {
//     expect(typeof singleNumber).toBe('function');
// });

test('nums = [2, 2, 3, 2]', () => {
    expect(singleNumber([2, 2, 3, 2])).toBe(3);
});

test('nums = [0, 1, 0, 1, 0, 1, 99', () => {
    expect(singleNumber([0, 1, 0, 1, 0, 1, 99])).toBe(99);
});
