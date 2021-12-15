/*
 * 633. Sum of Square Numbers
 *
 * Given a non-negative integer c, decide whether there're two integers a and b such that a ** 2 + b ** 2 = c.
 *
 * Example 1:
 * Input: c = 5
 * Output: true
 * Explanation: 1 * 1 + 2 * 2 = 5
 *
 * Example 2:
 * Input: c = 3
 * Output: false
 *
 * Constraints:
 * 0 <= x <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/sum-of-square-numbers/
*/

/**
 * Math.sqrt()
 *
 * Time Complexity: O(sqrt(c) * log(c)) = for 循环次数 sqrt(c) * Math.sqrt 时间复杂度 O(log(c))
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} c
 * @returns {boolean}
 */
function judgeSquareSum(c) {
    for (let i = 0; i * i <= c; i++) {
        if (Number.isInteger(Math.sqrt(c - i * i))) {
            return true;
        }
    }

    return false;
}

module.exports = judgeSquareSum;
