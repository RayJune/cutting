/*
 * 125. Valid Palindrome
 *
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 *
 * Given a string s, return true if it is a palindrome, or false otherwise.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 *
 * Constraints:
 * 1 <= s.length <= 2 * 10 ** 5
 * s consists only of printable ASCII characters.
 *
 * https://leetcode.com/problems/valid-palindrome/
 *
 * @related 680-valid-palindrome-ii
*/

/**
 * 输入一个字符串，判断它是否是回文字符串
 * 注意：
 * 1. 只考虑字母和数字
 * 2. 忽略字母的大小写
 * 3. 指定空字符串为回文字符串
 *
 * 思路：
 * Two Pointers 双指针，原地做比较，不创建新的字符串、数组
 * 1. 创建 left right 两个下标，分别代表要比较的前后对称两个值的下标
 * 2. 遍历字符串 s，依次判断两个下标对应的值是否是字母或数字，如果不是则把对应下标向前/向后移动，直到值为字母或数字为止
 * 3. 依次判断 s[left].toLowerCase === s[right].toLowerCase()
 *
 * Time Complexity: O(n) = 遍历次数
 * Space Complexity: O(1)
 * Auxiliary Complexity: O(1)
 * 其中 n 是字符串 s 的长度
 *
 * @param {string} s
 * @returns {boolean}
 */
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    const isSkip = char => /[^a-z0-9]/i.test(char);

    while (left < right) {
        while (left < right && isSkip(s[left])) {
            left += 1;
        }
        while (left < right && isSkip(s[right])) {
            right -= 1;
        }
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left += 1;
        right -= 1;
    }

    return true;
}

export default isPalindrome;
