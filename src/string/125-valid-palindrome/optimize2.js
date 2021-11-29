/*
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10 ** 5
 * s consists only of printable ASCII characters.
 *
 * https://leetcode.com/problems/valid-palindrome/
*/

/**
 * Time Complexity: O(n) = 内外层 while 循环次数之和 O(n)
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    const isAlnum = num => /[a-zA-Z0-9]/i.test(num);
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlnum(s[left])) {
            left += 1;
        }
        while (left < right && !isAlnum(s[right])) {
            right -= 1;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
}

module.exports = isPalindrome;
