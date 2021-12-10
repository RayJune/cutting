/*
 * 3. Longest Substring Without Repeating Characters
 *
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 * Example 4:
 * Input: s = ""
 * Output: 0
 *
 * Constraints:
 * 0 <= s.length <= 5 * 10 ** 4
 * s consists of English letters, digits, symbols and spaces.
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
*/

/**
 * Sliding Window
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(min(n, s)) = set 长度
 * Auxiliary complexity: O(min(n, s)) = set 长度
 * 其中 n 是字符串 s 的长度，s 是字符集大小（字符串中可能出现的字符）
 *
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
    const set = new Set();
    const len = s.length;
    let right = -1;
    let maxLen = 0;

    for (let i = 0; i < len; i++) {
        if (i !== 0) {
            set.delete(s[i - 1]);
        }
        while (right < len - 1 && !set.has(s[right + 1])) {
            set.add(s[right + 1]);
            right += 1;
        }
        maxLen = Math.max(maxLen, right - i + 1);
    }

    return maxLen;
}

module.exports = lengthOfLongestSubstring;
