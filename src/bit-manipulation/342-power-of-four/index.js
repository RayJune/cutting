/*
 * 342. Power of Four
 *
 * Given an integer n, return true if it is a power of four. Otherwise, return false.
 *
 * An integer n is a power of four, if there exists an integer x such that n == 4 ** x.
 *
 * Example 1:
 * Input: n = 16
 * Output: true
 *
 * Example 2:
 * Input: n = 5
 * Output: false
 *
 * Example 3:
 * Input: n = 1
 * Output: true
 *
 * Constraints:
 * -2 ** 31 <= n <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/power-of-four/
*/

/**
 * 0xaaaaaaaa = ob10101010101010101010101010101010
 *
 * Time Complexity: O(1)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfFour(n) {
    return n > 0 && (n & (n - 1)) === 0 && (n & 0xaaaaaaaa) === 0;;
}

module.exports = isPowerOfFour;
