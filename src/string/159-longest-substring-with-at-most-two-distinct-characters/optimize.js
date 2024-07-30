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
 *
 * @related 3-longest-substring-without-repeating-characters
 * @related 340-longest-substring-with-at-most-k-distinct-characters
 * @related 146-lru-cache
*/

/**
 * 输入一个字符串 s，返回该至多包含两个不同字符的最长子串的长度
 *
 * 思路：
 * Sliding Window + Linked Hash Map
 * 利用 JS 中的 Map 是有序的特性来简化操作
 * 1. 创建一个 Hash Map 来存储在元素在 s 中的最大下标值，创建左右指针 left right 代表当前窗口的头尾
 * 2. 更新 s[right] 值到 map 中
 * 3. 如果当前 map 出现了第三个不重复的字符，利用 Map 是有序的特性通过 map.entries().next() 拿到 map 头部元素的 key 和 value，删除 map 中的 key 节点并移动 left 节点到 value + 1 即可正确更新滑动窗口的头部
 * 4. 更新最大长度，right 节点右移一位
 * 5. 重复步骤 2 3 4 直到遍历完毕
 *
 * Time Complexity: O(n) = 左右指针遍历次数
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
        map.delete(s[right]);
        map.set(s[right], right);
        if (map.size > 2) {
            const [key, value] = map.entries().next().value;

            map.delete(key);
            left = value + 1;
        }
        maxLen = Math.max(maxLen, right - left + 1);
        right += 1;
    }

    return maxLen;
}

module.exports = lengthOfLongestSubstringTwoDistinct;
