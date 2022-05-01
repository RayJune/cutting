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
 * Bit Manipulation
 *
 * Time Complexity: O(m + n) = BigInt 操作 O(m + n) + toString 操作 O(max(m + n)) + while 循环次数 O(max(m + n))
 * Space complexity: O(m + n) = binaryA 和 binaryB 长度之和 + sum 长度 O(max(m + n))
 * Auxiliary complexity: O(m + n) = binaryA 和 binaryB 长度之和 + sum 长度 O(max(m + n))
 * 其中 m 和 n 分别是字符串 a 和 b 的长度
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let binaryA = BigInt(`0b${a}`);
    let binaryB = BigInt(`0b${b}`);
    let sum = 0;
    let carry = 1;

    while (carry) {
        sum = binaryA ^ binaryB;
        carry = (binaryA & binaryB) << BigInt('0b1');
        binaryA = sum;
        binaryB = carry;
    }

    return sum.toString(2);
}

module.exports = addBinary;
