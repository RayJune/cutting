/*
 * 93. Restore IP Addresses
 *
 * A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.
 *
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
 *
 * Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.
 *
 * Example 1:
 * Input: s = "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 * Example 2:
 * Input: s = "0000"
 * Output: ["0.0.0.0"]
 *
 * Example 3:
 * Input: s = "1111"
 * Output: ["1.1.1.1"]
 *
 * Example 4:
 * Input: s = "010010"
 * Output: ["0.10.0.10", "0.100.1.0"]
 *
 * Example 5:
 * Input: s = "101023"
 * Output:  ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * Constraints:
 * 1 <= s.length <= 3000
 * s consists of digits only.
 *
 * https://leetcode.com/problems/restore-ip-addresses/
*/

/**
 * Backtracking
 *
 * Time Complexity: O(s) = 遍历次数 O(3 ** 4) * 将 arr 加入到答案数组中 O(s)
 * Space complexity: O(s) = backtrack 函数调用栈深度 O(4) + 答案数组长度 O(3 ** 4 * s)
 * Auxiliary complexity: O(1) = backtrack 函数调用栈深度 O(4)
 *
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
    if (s.length < 4 || s.length > 12) {
        return [];
    }

    const addresses = [];
    const len = s.length;
    const backtrack = (arr, i) => {
        if (arr.length === 4) {
            if (i === len) {
                addresses.push(arr.join('.'));
            }
        } else {
            for (let j = 1; j < Math.min(4, len - i + 1); j++) {
                const str = s.substring(i, i + j);

                if ((str[0] !== '0' || j === 1) && Number(str) <= 255) {
                    arr.push(str);
                    backtrack(arr, i + j);
                    arr.pop();
                }
            }
        }
    };

    backtrack([], 0);

    return addresses;
}

module.exports = restoreIpAddresses;
