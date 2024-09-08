/*
 * 231. Power of Two
 *
 * Given an integer n, return true if it is a power of two. Otherwise, return false.
 *
 * An integer n is a power of two, if there exists an integer x such that n == 2x.
 *
 * Example 1:
 * Input: n = 1
 * Output: true
 * Explanation: 2 ** 0 = 1
 *
 * Example 2:
 * Input: n = 16
 * Output: true
 *
 * Example 3:
 * Input: n = 3
 * Output: false
 *
 * Example 4:
 * Input: n = 4
 * Output: true
 *
 * Example 5:
 * Input: n = 5
 * Output: false
 *
 * Constraints:
 * (-2) ** 31 <= n <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/power-of-two/
*/

/**
 * 找到 rightMost1
 *
 * Time Complexity: O(1)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @returns {boolean}
 */
function isPowerOfTwo(n) {
    return n > 0 && (n & -n) === n;
}

export default isPowerOfTwo;
