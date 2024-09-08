// import isPalindrome from './index';
// import isPalindrome from './optimize';
import isPalindrome from './optimize2';
// import isPalindrome from './template';
// import isPalindrome from './template-zh';

test('define isPalindrome function', () => {
    expect(typeof isPalindrome).toBe('function');
});

test('s = "A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
});

test('s = "race a car"', () => {
    expect(isPalindrome('race a car')).toBe(false);
});

test('s = " "', () => {
    expect(isPalindrome(' ')).toBe(true);
});
