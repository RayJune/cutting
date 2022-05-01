/*
 * 459. Repeated Substring Pattern
 *
 * Given a string s, check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.
 *
 * Example 1:
 * Input: s = "abab"
 * Output: true
 * Explanation: It is the substring "ab" twice.
 *
 * Example 2:
 * Input: s = "aba"
 * Output: false
 *
 * Example 3:
 * Input: s = "abcabcabcabc"
 * Output: true
 * Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
 *
 * Constraints:
 * 1 <= s.length <= 10 ** 4
 * s consists of lowercase English letters.
 *
 * https://leetcode.com/problems/repeated-substring-pattern/
*/

/**
 * Time Complexity: O(n) = 字符串相加 / slice / includes
 * Space complexity: O(n) = 字符串相加产生的空间
 * Auxiliary complexity: O(n) = 字符串相加产生的空间
 * 其中 n 是 s 字符串的长度
 *
 * @param {string} s
 * @return {boolean}
 */
function repeatedSubstringPattern(s) {
    return (s + s).slice(1, -1).includes(s);
}

module.exports = repeatedSubstringPattern;
