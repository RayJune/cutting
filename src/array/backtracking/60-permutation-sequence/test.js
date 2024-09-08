// import getPermutation from './index';
// import getPermutation from './optimize';
import getPermutation from './optimize2';
// import getPermutation from './template';
// import getPermutation from './template-zh';

test('define permute function', () => {
    expect(typeof getPermutation).toBe('function');
});

test('n = 3, k = 3', () => {
    expect(getPermutation(3, 3)).toBe("213");
});

test('n = 4, k = 9', () => {
    expect(getPermutation(4, 9)).toBe("2314");
});

test('n = 3, k = 1', () => {
    expect(getPermutation(3, 1)).toBe("123");
});
