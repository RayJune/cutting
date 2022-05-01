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
 * Expand Around Center
 *
 * Time Complexity: O(n ** 2) = 两层 for 循环次数之和
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 *
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let start = 0;
    let maxLen = 1;
    const len = s.length;
    const expand = (left, right) => {
        while (left >= 0 && right < len && s[left] === s[right]) {
            if (right - left + 1 > maxLen) {
                maxLen = right - left + 1;
                start = left;
            }
            left -= 1;
            right += 1;
        }
    }

    for (let i = 0; i < len; i++) {
        expand(i, i + 1);
        expand(i, i + 2);
    }

    return s.substring(start, start + maxLen);
}

module.exports = longestPalindrome;
