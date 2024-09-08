import guessNumber from './index';
// import guessNumber from './template';
// import guessNumber from './template-zh';
import guess from './guess';

test('define guessNumber function', () => {
    expect(typeof guessNumber).toBe('function');
});

test('n = 10, pick = 6', () => {
    guess.pick = 6;
    expect(guessNumber(10)).toBe(6);
});

test('n = 1, pick = 1', () => {
    guess.pick = 1;
    expect(guessNumber(1)).toBe(1);
});

test('n = 2, pick = 1', () => {
    guess.pick = 1;
    expect(guessNumber(2)).toBe(1);
});

test('n = 2, pick = 2', () => {
    guess.pick = 2;
    expect(guessNumber(2)).toBe(2);
});
