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
 * Time Complexity: O(n) = toLowerCase/replace/split/reverse/join 操作
 * Space complexity: O(n) = split 产生的数组长度 O(n) + filteredS/reversedS 长度
 * Auxiliary complexity: O(n) = split 产生的数组长度 O(n) + filteredS/reversedS 长度
 * 其中 n 为字符串 s 的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    const filteredS = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '');
    const reversedS = filteredS
        .split('')
        .reverse()
        .join('');

    return filteredS === reversedS;
}

module.exports = isPalindrome;
