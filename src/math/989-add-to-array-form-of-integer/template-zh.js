/*
 * 989. 数组形式的整数加法
 *
 * 对于非负整数 X 而言，X 的数组形式是每位数字按从左到右的顺序形成的数组。例如，如果 X = 1231，那么其数组形式为 [1, 2, 3, 1]。
 *
 * 给定非负整数 X 的数组形式 A，返回整数 X + K 的数组形式。
 *
 * Example 1:
 * Input: num = [1, 2, 0, 0], k = 34
 * Output: [1, 2, 3, 4]
 * Explanation: 1200 + 34 = 1234
 *
 * Example 2:
 * Input: num = [2, 7, 4], k = 181
 * Output: [4, 5, 5]
 * Explanation: 274 + 181 = 455
 *
 * Example 3:
 * Input: num = [2, 1, 5], k = 806
 * Output: [1, 0, 2, 1]
 * Explanation: 215 + 806 = 1021
 *
 * Example 4:
 * Input: num = [9, 9, 9, 9, 9, 9, 9, 9, 9, 9], k = 1
 * Output: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * Explanation: 9999999999 + 1 = 10000000000
 *
 * Constraints:
 * 1 <= num.length <= 10 ** 4
 * 0 <= num[i] <= 9
 * num does not contain any leading zeros except for the zero itself.
 * 1 <= k <= 10 ** 4
 *
 * https://leetcode-cn.com/problems/add-to-array-form-of-integer/
*/

module.exports = addToArrayForm;
