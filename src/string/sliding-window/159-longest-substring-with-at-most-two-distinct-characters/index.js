/*
 * 159. Longest Substring with At Most Two Distinct Characters
 *
 * Given a string s, return the length of the longest substring that contains at most two distinct characters.
 *
 * Example 1:
 * Input: s = "eceba"
 * Output: 3
 * Explanation: The substring is "ece" which its length is 3.
 *
 * Example 2:
 * Input: s = "ccaabbb"
 * Output: 5
 * Explanation: The substring is "aabbb" which its length is 5.
 *
 * Constraints:
 * 1 <= s.length <= 10 ** 5
 * s consists of English letters.
 *
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
*/

/**
 * Sliding Window + Hash Map
 *
 * Time Complexity: O(n) = 遍历次数
 * Space complexity: O(1)
 * Auxiliary complexity: O(1)
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstringTwoDistinct(s) {
    const map = new Map();
    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        while (map.size > 2) {
            map.set(s[left], map.get(s[left]) - 1);
            if (map.get(s[left]) === 0) {
                map.delete(s[left]);
            }
            left += 1;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right += 1;
    }

    return maxLen;
}

module.exports = lengthOfLongestSubstringTwoDistinct;
