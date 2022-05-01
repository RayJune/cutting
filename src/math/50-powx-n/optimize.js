/*
 * 50. Pow(x, n)
 *
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x ** n).
 *
 * Example 1:
 * Input: x = 2.00000, n = 10
 * Output: 1024.00000
 *
 * Example 2:
 * Input: x = 2.10000, n = 3
 * Output: 9.26100
 *
 * Example 3:
 * Input: x = 2.00000, n = -2
 * Output: 0.25000
 * Explanation: 2 ** (-2) = (1 / 2) ** 2 = 1/4 = 0.25
 *
 * Constraints:
 * -100.0 < x < 100.0
 * (-2) ** 31 <= n <= 2 ** 31 - 1
 * (-10) ** 4 <= x ** n <= 10 ** 4
 *
 * https://leetcode.com/problems/powx-n/
*/

/**
 * Fast Power Algorithm Iterative
 *
 * Time Complexity: O(log(n)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let power = 1;

    while (n) {
        if (n % 2 === 1) {
            power *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }

    return power;
}

module.exports = myPow;
