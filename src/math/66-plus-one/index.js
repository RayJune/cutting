/*
 * 66. Plus One
 *
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 *
 * Example 1:
 * Input: digits = [1, 2, 3]
 * Output: [1, 2, 4]
 * Explanation: The array represents the integer 123.
 * Incrementing by one gives 123 + 1 = 124.
 * Thus, the result should be [1, 2, 4].
 *
 * Example 2:
 * Input: digits = [4, 3, 2, 1]
 * Output: [4, 3, 2, 2]
 * Explanation: The array represents the integer 4321.
 * Incrementing by one gives 4321 + 1 = 4322.
 * Thus, the result should be [4, 3, 2, 2].
 *
 * Example 3:
 * Input: digits = [0]
 * Output: [1]
 * Explanation: The array represents the integer 0.
 * Incrementing by one gives 0 + 1 = 1.
 * Thus, the result should be [1].
 *
 * Example 4:
 * Input: digits = [9]
 * Output: [1, 0]
 * Explanation: The array represents the integer 9.
 * Incrementing by one gives 9 + 1 = 10.
 * Thus, the result should be [1, 0].
 *
 * Constraints:
 * 1 <= digits.length <= 100
 * 0 <= digits[i] <= 9
 * digits does not contain any leading 0's.
 *
 * https://leetcode.com/problems/plus-one/
*/

/**
 * 注意进位
 *
 * Time Complexity: O(n) = while 循环次数 + unshift 操作
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是 digits 数组的长度
 *
 * @param {number[]} digits
 * @returns {number[]}
 */
function plusOne(digits) {
    let carry = 1;
    let i = digits.length - 1;

    while (carry && i >= 0) {
        carry += digits[i];
        digits[i] = carry % 10;
        carry = Math.floor(carry / 10);
        i -= 1;
    }
    if (carry) {
        digits.unshift(carry);
    }

    return digits;
}

module.exports = plusOne;
