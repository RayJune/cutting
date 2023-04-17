/*
 * 190. Reverse Bits
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * Example 1:
 * Input: n = 00000010100101000001111010011100
 * Output: 964176192 (00111001011110000010100101000000)
 *
 * Example 2:
 * Input: n = 11111111111111111111111111111101
 * Output: 3221225471 (10111111111111111111111111111111)
 *
 * Constraints:
 * The input must be a binary string of length 32.
 *
 * https://leetcode.com/problems/reverse-bits/
*/

/**
 * 直接反转
 *
 * Time Complexity: O(1)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function reverseBits(n) {
    return parseInt(n
        .toString(2)
        .padStart(32, 0)
        .split('')
        .reverse()
        .join(''), 2);
}

module.exports = reverseBits;
