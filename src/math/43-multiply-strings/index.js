/*
 * 43. Multiply Strings
 *
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 * num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 *
 * https://leetcode.com/problems/multiply-strings/
*/

/**
 * num[i] * num[j] = result[i + j + 1], 注意进位
 *
 * Time Complexity: O(m * n) = 两层 for 循环次数之和
 * Space complexity: O(m + n) = result 数组长度
 * Auxiliary complexity: O(1)
 *
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
function multiply(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const value = result[i + j + 1] + num1[i] * num2[j];

            result[i + j + 1] = value % 10;
            result[i + j] += Math.floor(value / 10);
        }
    }

    let i = 0;

    while (result[i] === 0) {
        i += 1;
    }
    result.splice(0, i);

    return result.length ? result.join('') : '0';
}

module.exports = multiply;
