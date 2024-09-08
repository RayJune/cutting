import subarraysDivByK from './index';
// import subarraysDivByK from './template';
// import subarraysDivByK from './template-zh';

test('define subarraysDivByK function', () => {
    expect(typeof subarraysDivByK).toBe('function');
});

test('nums = [4, 5, 0, -2, -3, 1], k = 5', () => {
    expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
});
