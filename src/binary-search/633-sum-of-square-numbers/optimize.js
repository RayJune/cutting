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
 * Two Pointers
 *
 * Time Complexity: O(log(c) + sqrt(c)) = Math.sqrt 时间复杂度 O(log(c)) + for 循环次数 sqrt(c)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} c
 * @returns {boolean}
 */
function judgeSquareSum(c) {
    let left = 0;
    let right = Math.floor(Math.sqrt(c));

    while (left <= right) {
        const sum = left * left + right * right;

        if (sum < c) {
            left += 1;
        } else if (sum > c) {
            right -= 1;
        } else {
            return true;
        }
    }

    return false;
}

module.exports = judgeSquareSum;
