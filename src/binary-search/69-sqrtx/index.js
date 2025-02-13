/*
 * 69. Sqrt(x)
 *
 * Given a non-negative integer x, compute and return the square root of x.
 *
 * Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
 *
 * Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.
 *
 * Example 1:
 * Input: x = 4
 * Output: 2
 *
 * Example 2:
 * Input: x = 8
 * Output: 2
 * Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
 *
 * Constraints:
 * 0 <= x <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/sqrtx/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(x)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} x
 * @returns {number}
 */
function mySqrt(x) {
    let left = 0;
    let right = x;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const square = mid ** 2;

        if (square < x) {
            left = mid + 1;
        } else if (square > x) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return right;
}

export default mySqrt;
