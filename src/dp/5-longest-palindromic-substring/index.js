/*
 * 5. Longest Palindromic Substring
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 *
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Example 3:
 * Input: s = "a"
 * Output: "a"
 *
 * Example 4:
 * Input: s = "ac"
 * Output: "a"
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 *
 * https://leetcode.com/problems/longest-palindromic-substring/
*/

/**
 * Dynamic Programming, dp[i][j] 表示 s.substring(i, j + 1) 是否是回文串
 *
 * Time Complexity: O(n ** 2) = 两层 for 循环次数之和
 * Space complexity: O(n * 2) = dp 数组所占空间
 * Auxiliary complexity: O(n ** 2) = dp 数组所占空间
 *
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    const len = s.length;
    const dp = new Array(len).fill().map(() => new Array(len).fill(false));
    let start = 0;
    let maxLen = 1;

    for (let i = len - 1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1]);
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                start = i;
            }
        }
    }

    return s.substring(start, start + maxLen);
}

module.exports = longestPalindrome;
