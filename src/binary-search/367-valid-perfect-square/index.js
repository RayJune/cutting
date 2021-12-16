/*
 * 367. Valid Perfect Square
 *
 * Given a positive integer num, write a function which returns True if num is a perfect square else False.
 *
 * Follow up: Do not use any built-in library function such as sqrt.
 *
 * Example 1:
 * Input: num = 16
 * Output: true
 *
 * Example 2:
 * Input: num = 14
 * Output: false
 *
 * Constraints:
 * 0 <= x <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/valid-perfect-square/
*/

/**
 * Binary Search
 *
 * Time Complexity: O(log(num)) = while 循环次数
 * Space complexity: O()
 * Auxiliary complexity: O()
 *
 * @param {number} num
 * @returns {boolean}
 */
function isPerfectSquare(num) {
    let left = 0;
    let right = num;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);
        const square = mid ** 2;

        if (square < num) {
            left = mid + 1;
        } else if (square > num) {
            right = mid - 1;
        } else {
            return true;
        }
    }

    return false;
}

module.exports = isPerfectSquare;
