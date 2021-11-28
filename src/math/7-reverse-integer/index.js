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
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} x
 * @returns {number}
 */
function reverse(x) {
    let reversedX = 0;

    while (x !== 0) {
        reversedX = reversedX * 10 + x % 10;
        if (reversedX < (-2) ** 31 || reversedX > 2 ** 31 - 1) {
            return 0;
        }
        x = parseInt(x / 10);
    }

    return reversedX;
}

module.exports = reverse;
