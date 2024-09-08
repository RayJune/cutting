/*
 * 66. 加一
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位，数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
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
 * https://leetcode.cn/problems/plus-one/
*/

export default plusOne;
