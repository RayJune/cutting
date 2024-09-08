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
 *
 * @related 3-longest-substring-without-repeating-characters
 * @related 159-longest-substring-with-at-most-two-distinct-characters
 * @related 209-minimum-size-subarray-sum
*/

/**
 * 输入一个字符串 s 和数字 k，返回该至多包含 k 个不同字符的最长子串的长度
 *
 * 思路：
 * Sliding Window + Hash Map
 * 1. 创建一个 Hash Map 储存字符在滑动窗口中出现的次数，创建左右指针 left right 代表当前窗口的头尾
 * 2. 更新 s[right] 在滑动窗口中出现的次数到 map 中
 * 3. 如果当前 map 出现了第 k 个不重复的字符，边把 left 节点右移边更新 map 中 s[left] -= 1，直到 map[s[left]] === 0 删除节点，从而达到 map.size === k 的要求
 * 4. 更新最大长度值，right 节点右移一位
 * 5. 重复步骤 2 3 4 直到遍历完毕
 *
 * Time Complexity: O(n) = 左右指针遍历次数
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

export default lengthOfLongestSubstringKDistinct;
