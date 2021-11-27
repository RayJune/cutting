/*
 * 191. Number of 1 Bits
 *
 * Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
 *
 * Example 1:
 * Input: n = 00000000000000000000000000001011
 * Output: 3
 *
 * Example 2:
 * Input: n = 00000000000000000000000010000000
 * Output: 1
 *
 * Example 3:
 * Input: n = 11111111111111111111111111111101
 * Output: 31
 *
 * Constraints:
 * The input must be a binary string of length 32.
 *
 * https://leetcode.com/problems/number-of-1-bits/
*/

/**
 * regex
 *
 * Time Complexity: O(1)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @return {number}
 */
function hammingWeight(n) {
    return n === 0 ? 0 : n.toString(2).match(/1/g).length;
}

module.exports = hammingWeight;
