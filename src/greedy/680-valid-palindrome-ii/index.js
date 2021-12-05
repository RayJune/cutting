/*
 * 680. Valid Palindrome II
 *
 * Given a string s, return true if the s can be palindrome after deleting at most one character from it.
 *
 * Example 1:
 * Input: s = "aba"
 * Output: true
 *
 * Example 2:
 * Input: s = "abca"
 * Output: true
 * Explanation: You could delete the character 'c'.
 *
 * Example 3:
 * Input: s = "abc"
 * Output: false
 *
 * Constraints:
 * 1 <= s.length <= 10 ** 5
 * s consists of lowercase English letters.
 *
 * https://leetcode.com/problems/valid-palindrome-ii/
*/

/**
 * Greedy Algorithm
 *
 * Time Complexity: O(n) = while 循环次数 / isPalindrome 操作
 * Space complexity: O(n)
 * Auxiliary complexity: O(n)
 *
 * @param {string} s
 * @returns {boolean}
 */
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
        }
        left += 1;
        right -= 1;
    }

    return true;
}

/**
 * Time Complexity: O(n) = while 循环次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {string} s
 * @param {left} left
 * @param {right} right
 * @returns {boolean}
 */
function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
}

module.exports = validPalindrome;
