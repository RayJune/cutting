/*
 * 516. Longest Palindromic Subsequence
 *
 * Given a string s, find the longest palindromic subsequence's length in s.
 *
 * A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
 *
 * Example 1:
 * Input: s = "bbbab"
 * Output: 4
 * Explanation: One possible longest palindromic subsequence is "bbbb".
 * *
 * Example 2:
 * Input: s = "cbbd"
 * Output: 2
 * Explanation: One possible longest palindromic subsequence is "bb".
 *
 * Constraints:
 * 1 <= s.length <= 1000
 * s consists only of lowercase English letters.
 *
 * https://leetcode.com/problems/longest-palindromic-subsequence/
*/

/**
 * Dynamic Programming
 *
 * Time Complexity: O(n ** 2) = 两层 for 循环次数
 * Space complexity: O(n) = dp 数组所占空间
 * Auxiliary complexity: O(n) = dp 数组所占空间
 *
 * @param {string} s
 * @returns {number}
 */
function longestPalindromeSubseq(s) {
    const len = s.length;
    const dp = new Array(len).fill(1);

    for (let i = len - 2; i >= 0; i--) {
        let prev = 0;
        for (let j = i + 1; j < len; j++) {
            const temp = dp[j];

            dp[j] = s[i] === s[j] ? prev + 2 : Math.max(dp[j], dp[j - 1]);
            prev = temp;
        }
    }

    return dp[len - 1];
}

export default longestPalindromeSubseq;
