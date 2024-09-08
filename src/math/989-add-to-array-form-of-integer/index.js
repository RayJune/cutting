/*
 * 989. Add to Array-Form of Integer
 *
 * The array-form of an integer num is an array representing its digits in left to right order.
 *
 * For example, for num = 1321, the array form is [1, 3, 2, 1].
 * Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.
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
 * https://leetcode.com/problems/add-to-array-form-of-integer/
*/

/**
 * 逐位相加
 *
 * Time Complexity: O(max(n, log10(k))) = while 循环次数 + reverse 操作
 * Space complexity: O(max(n, log10(k))) = 增加的 num 元素长度
 * Auxiliary complexity: O(1)
 * 其中 n 为 num 数组的长度
 *
 * @param {number[]} num
 * @param {number} k
 * @returns {number[]}
 */
function addToArrayForm(num, k) {
    let carry = k;
    let i = num.length - 1;

    while (carry && i >= 0) {
        carry += num[i];
        num[i] = carry % 10;
        carry = Math.floor(carry / 10);
        i -= 1;
    }
    if (carry) {
        num.reverse();
        while (carry) {
            num.push(carry % 10);
            carry = Math.floor(carry / 10);
        }
        num.reverse();
    }

    return num;
}

export default addToArrayForm;
