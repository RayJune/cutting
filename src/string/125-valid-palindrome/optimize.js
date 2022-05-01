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
 * Time Complexity: O(n) = toLowerCase/replace 操作 O(n) + for 循环 O(n / 2)
 * Space complexity: O(n) = filteredS 长度
 * Auxiliary complexity: O(n) = filteredS 长度
 *
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    const filteredS = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = filteredS.length;

    for (let i = 0; i < Math.floor(len / 2); i++) {
        if (filteredS[i] !== filteredS[len - i - 1]) {
            return false;
        }
    }

    return true;
}

module.exports = isPalindrome;
