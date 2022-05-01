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
 * 利用 n & 1 取出 rightMost bit，注意 Unsigned right shift
 *
 * Time Complexity: O(1)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function reverseBits(n) {
    let reverse = 0;
    let power = 31;

    while (n !== 0 && power >= 0) {
        reverse |= (n & 1) << power;
        n >>= 1;
        power -= 1;
    }

    return reverse >>> 0;
}

module.exports = reverseBits;
