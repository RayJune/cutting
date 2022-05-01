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
 * BigInt
 *
 * Time Complexity: O(m + n) = BigInt 操作 O(m + n) + toString 操作 O(max(m + n))
 * Space complexity: O(m + n) = 两次 BigInt 创建的数字长度之和 + toString 创建的字符串长度 O(max(m + n))
 * Auxiliary complexity: O(m + n) = 两次 BigInt 创建的数字长度之和 + toString 创建的字符串长度 O(max(m + n))
 * 其中 m 和 n 分别是字符串 a 和 b 的长度
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
}

// function addBinary(a, b) {
    // 注意，parseInt 无法处理大于 Number.MAX_SAFE_INTEGER 的数，所以需要使用 BigInt
    // return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
// }

module.exports = addBinary;
