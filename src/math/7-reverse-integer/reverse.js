/*
 * 7. Reverse Integer
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [(-2) ** 31, 2 ** 31 - 1], then return 0.
 *
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 *
 * Example 1:
 * Input: x = 123
 * Output: 321
 *
 * Example 2:
 * Input: x = -123
 * Output: -321
 *
 * Example 3:
 * Input: x = 120
 * Output: 21
 *
 * Example 4:
 * Input: x = 0
 * Output: 0
 *
 * Constraints:
 * (-2) ** 31 <= x <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/reverse-integer/
*/

/**
 * Reverse
 *
 * Time Complexity: O(log(x)) = 粗略的算约有 log10(x) 位
 * Space complexity: O(log(x)) = .split 创建的数组长度 log10(x)
 * Auxiliary complexity: O(log(x)) = .split 创建的数组长度 log10(x)
 *
 * @param {number} x
 * @returns {number}
 */
function reverse(x) {
    const reversedX = Math.sign(x) * Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('');

    return reversedX < (-2) ** 31 || reversedX > 2 ** 31 - 1 ? 0 : reversedX;
}

module.exports = reverse;
