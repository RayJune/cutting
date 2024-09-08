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
 * 利用 remove rightMost1
 *
 * Time Complexity: O(1) = 根据题意，n 为 32 位
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} n
 * @returns {number}
 */
function hammingWeight(n) {
    let count = 0;

    while (n) {
        n &= n - 1;
        count += 1;
    }

    return count;
}

export default hammingWeight;
