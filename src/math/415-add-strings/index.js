/*
 * 415. Add Strings
 *
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 *
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 *
 * Example 1:
 * Input: num1 = "11", num2 = "123"
 * Output: "134"
 *
 * Example 2:
 * Input: num1 = "456", num2 = "77"
 * Output: "533"
 *
 * Example 3:
 * Input: num1 = "0", num2 = "0"
 * Output: "0"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 10 ** 4
 * num1 and num2 consist of only digits.
 * num1 and num2 don't have any leading zeros except for the zero itself.
 *
 * https://leetcode.com/problems/add-strings/
*/

/**
 * 利用减号来隐式把 string 为转化为 number
 *
 * Time Complexity: O(max(m, n)) = while 循环次数
 * Space complexity: O(max(m, n))
 * Auxiliary complexity: O(1)
 * 其中 m 和 n 分别为 num1 和 num2 的长度
 *
 * @param {string} num1
 * @param {string} num2
 * @returns {string}
 */
function addStrings(num1, num2) {
    const sum = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;

    while (i >= 0 || j >= 0) {
        const value1 = num1[i] - '0' || 0;
        const value2 = num2[j] - '0'|| 0;

        carry += value1 + value2;
        sum.push(carry % 10);
        carry = Math.floor(carry / 10);
        i -= 1;
        j -= 1;
    }
    if (carry) {
        sum.push(carry);
    }

    return sum.reverse().join('');
}

module.exports = addStrings;
