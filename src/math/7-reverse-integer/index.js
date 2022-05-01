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
 * 用 parseInt 来消除负号
 *
 * Time Complexity: O(log(x)) = while 循环次数为 x 十进制的位数 log10(x)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let reversedX = 0;
    const max = 2 ** 31 - 1;
    const min = (-2) ** 31;

    while (x) {
        reversedX = reversedX * 10 + x % 10;
        if (reversedX > max || reversedX < min) {
            return 0;
        }
        x = parseInt(x / 10, 10);
    }

    return reversedX;
}

module.exports = reverse;
