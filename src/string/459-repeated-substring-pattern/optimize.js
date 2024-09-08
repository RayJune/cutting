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
 * KMP Algorithm
 *
 * Time Complexity: O(n) = for 循环次数
 * Space complexity: O(n) = next 数组长度
 * Auxiliary complexity: O(n) = next 数组长度
 * 其中 n 是 s 字符串的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function repeatedSubstringPattern(s) {
    if (s.length === 0) {
        return true;
    }

    const len = s.length;
    const next = [0];
    let i = 0;

    for (let j = 1; j < len; j++) {
        while (i > 0 && s[i] !== s[j]) {
            i = next[i - 1];
        }
        if (s[i] === s[j]) {
            i += 1;
        }
        next.push(i);
    }

    return next[next.length - 1] !== 0 && len % (len - next[next.length - 1]) === 0;
}

export default repeatedSubstringPattern;
