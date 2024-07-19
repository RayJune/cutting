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
 * 输入一个字符串，判断它是否是回文字符串。
 * 注意：
 * 1. 只考虑字母和数字
 * 2. 忽略字母的大小写
 * 3. 指定空字符串为回文字符串
 *
 * 思路：
 * 1. 大小写统一，用 .toLowerCase 处理
 * 2. 正则匹配，筛选出由字母和数字所组成的字符串
 * 3. 字符串反转，.split + .reverse + .join 方法
 * 4. 将反转字符串与原字符串作比较得出结果
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
