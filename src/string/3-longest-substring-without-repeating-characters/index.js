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
 *
 * @related 159-longest-substring-with-at-most-two-distinct-characters
 * @related 340-longest-substring-with-at-most-k-distinct-characters
 * @related 209-minimum-size-subarray-sum
*/

/**
 * 输入一个字符串 s，返回其不含有重复字符的最长子串的长度
 *
 * 思路：
 * Sliding Window + Hash Set
 * 1. 创建一个 Hash Set，储存当前子串的字符，创建左右指针 left right 代表当前窗口的头尾
 * 2. 遍历字符串 s 一直到出现重复字符或遍历完 s
 * 3. 把当前的窗口长度与之前的最大长度作比较，更新最大长度值
 * 4. 如果出现重复元素，则不断从 Set 里删除 left 节点来去除重复值，更新 left 值
 * 5. 重复步骤 2 3 4 直到遍历完毕
 *
 * Time Complexity: O(n) = 左右指针遍历次数
 * Space Complexity: O(m) = set 长度
 * Auxiliary Complexity: O(m) = set 长度
 * 其中 n 是字符串 s 的长度，m 是字符集大小（字符串中可能出现的字符）
 *
 * @param {string} s
 * @returns {number}
 */
function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0;
    let right = 0;
    let maxLen = 0;

    while (right < s.length) {
        while (right < s.length && !set.has(s[right])) {
            set.add(s[right]);
            right += 1;
        }
        maxLen = Math.max(maxLen, right - left);
        while (set.has(s[right])) {
            set.delete(s[left]);
            left += 1;
        }
    }

    return maxLen;
}

module.exports = lengthOfLongestSubstring;
