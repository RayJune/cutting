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
 *
 * @related 125-valid-palindrome
*/


/**
 * 给定一个非空字符串 s，最多删除一个字符，判断能否成为回文字符串
 *
 * 思路：
 * 贪心算法 Greedy Algorithm
 * 定义 left right 两个初始值为头尾的指针，依次判断 s[left] === s[right]
 * 如果相同则 left += 1 right -= 1
 * 如果不同则分别判断去除 s[left] 和 s[right] 后的子字符串是否是回文字符串
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function validPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s);
        }
        left += 1;
        right -= 1;
    }

    return true;
}

/**
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @param {left} left
 * @param {right} right
 * @returns {boolean}
 */
function isPalindrome(left, right, s) {
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
