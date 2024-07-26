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
 *
 * @related 680-valid-palindrome-ii
*/

/**
 * 输入一个字符串，判断它是否是回文字符串。
 * 注意：
 * 1. 只考虑字母和数字
 * 2. 忽略字母的大小写
 * 3. 指定空字符串为回文字符串
 *
 * 思路：
 * 1. 统一大小写，正则匹配出字符串中的字母和数字，得到目标字符串
 * 2. 将目标字符串反转，拿反转后的字符串与目标字符串作比较得出是否是回文字符串
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(n) = 创建的数组长度 / 创建的字符串长度
 * Auxiliary Complexity: O(n) = 创建的数组长度
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    const filteredS = s
        .toLowerCase()
        .replaceAll(/[^a-z0-9]/g, '');
    const reversedS = filteredS
        .split('')
        .reverse()
        .join('');

    return filteredS === reversedS;
}

module.exports = isPalindrome;
