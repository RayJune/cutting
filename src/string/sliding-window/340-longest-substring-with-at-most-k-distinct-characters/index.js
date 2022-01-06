/*
 * 340. Longest Substring with At Most K Distinct Characters
 *
 * Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.
 *
 * Example 1:
 * Input: s = "eceba", k = 2
 * Output: 3
 * Explanation: The substring is "ece" with length 3.
 *
 * Example 2:
 * Input: s = "aa", k = 1
 * Output: 2
 * Explanation: The substring is "aa" with length 2.
 *
 * Constraints:
 * 1 <= s.length <= 10 ** 5
 * 0 <= k <= 50
 *
 * https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/
*/

/**
 * Sliding Window + Hash Map
 *
 * Time Complexity: O(n * k) = 遍历次数
 * Space complexity: O(k) = map 长度
 * Auxiliary complexity: O(k) = map
 * 其中 n 为字符串 s 的长度
 *
 * @param {string} s
 * @param {number} k
 * @returns {number}
 */
function lengthOfLongestSubstringKDistinct(s, k) {
    const map = new Map();
    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < s.length) {
        map.set(s[right], (map.get(s[right]) || 0) + 1);
        while (map.size > k) {
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

module.exports = lengthOfLongestSubstringKDistinct;
