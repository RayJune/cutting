/*
 * 374. Guess Number Higher or Lower
 *
 * We are playing the Guess Game. The game is as follows:
 *
 * I pick a number from 1 to n. You have to guess which number I picked.
 *
 * Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
 *
 * You call a pre-defined API int guess(int num), which returns 3 possible results:
 *
 * -1: The number I picked is lower than your guess (i.e. pick < num).
 * 1: The number I picked is higher than your guess (i.e. pick > num).
 * 0: The number I picked is equal to your guess (i.e. pick == num).
 * Return the number that I picked.
 *
 * Example 1:
 * Input: n = 10, pick = 6
 * Output: 6
 *
 * Example 2:
 * Input: n = 1, pick = 1
 * Output: 1
 *
 * Example 3:
 * Input: n = 2, pick = 1
 * Output: 1
 *
 * Example 4:
 * Input: n = 2, pick = 2
 * Output: 2
 *
 * Constraints:
 * 1 <= n <= 2 ** 31 - 1
 * 1 <= pick <= n
 *
 * https://leetcode.com/problems/guess-number-higher-or-lower/
*/

const guess = require('./guess');

/**
 * Binary Search
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function guessNumber(n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const result = guess(mid);

        if (result === 1) {
            left = mid + 1;
        } else if (result === -1) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
}

module.exports = guessNumber;
