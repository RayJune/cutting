/*
 * 9. Palindrome Number
 *
 * Given an integer x, return true if x is palindrome integer.
 *
 * An integer is a palindrome when it reads the same backward as forward.
 *
 * For example, 121 is a palindrome while 123 is not.
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 *
 * Example 2:
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 * Example 4:
 * Input: x = -101
 * Output: false
 *
 * Constraints:
 * (-2) ** 31 <= x <= 2 ** 31 - 1
 *
 * https://leetcode.com/problems/palindrome-number/
*/

/**
 * Revert half of the number
 *
 * Time Complexity: O(log10(x)) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {number} x
 * @returns {boolean}
 */
function isPalindrome(x) {
    if (x < 0 || (x !== 0 && x % 10 === 0)) {
        return false;
    }

    let reversedX = 0;

    while (reversedX < x) {
        reversedX = reversedX * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return reversedX === x || Math.floor(reversedX / 10) === x;
}

module.exports = isPalindrome;
