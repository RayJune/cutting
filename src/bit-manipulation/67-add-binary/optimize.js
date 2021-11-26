/*
 * 67. Add Binary
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * Example 1:
 * Input: a = "11", b = "1"
 * Output: "100"
 *
 * Example 2:
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 *
 * Constraints:
 * 1 <= a.length, b.length <= 10 ** 4
 * a and b consist only of '0' or '1' characters.
 * Each string does not contain leading zeros except for the zero itself.
 *
 * https://leetcode.com/problems/add-binary/
*/

/**
 * Bit-by-Bit Computation
 *
 * Time Complexity: O(max(m, n)) = for 循环次数
 * Space complexity: O(max(m, n)) = sum 数组长度
 * Auxiliary complexity: O(max(m, n)) = sum 数组长度
 * 其中 m 和 n 分别是字符串 a 和 b 的长度
 *
 * @param {string} a
 * @param {string} b
 * @returns {string}
 */
function addBinary(a, b) {
    let sum = [];
    let carry = 0;

    for (let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
        if (i >= 0) {
            carry += parseInt(a[i]);
        }
        if (j >= 0) {
            carry += parseInt(b[j]);
        }
        sum.push(carry % 2);
        carry = Math.floor(carry / 2);
    }
    if (carry) {
        sum.push(carry);
    }

    return sum.reverse().join('');
}

module.exports = addBinary;
