/*
 * Given a string `s` containing only digits, return all possible valid IP addresses that can be obtained from s.
 * You can return them in any order.
 *
 * A valid IP address consists of exactly four integers, each integer is between 0 and 255, separated by single dots and cannot have leading zeros.
 * For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses and "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
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
 *
*/

/**
 * 用回溯法来做，注意在符合条件的情况下剪枝
 *
 * Time Complexity: O(1) = tree 深度为 3，有 4 个互相影响的树需要遍历 O(3^4) * 把一个合格的 ip push 到 result 中 O(0 <= s.length <= 12)
 * Space complexity: O(1) = 合格 ip 个数 O(0 <= N <= 19) (在 s.length = 8 时可能会出现的最多合格 ip 个数为 19) * ip 长度 O(4 <= M <=12) + backtrack 函数调用栈深度 O(3)
 * Auxiliary complexity: O(1) = backtrack 函数调用栈深度 O(3)
 *
 * @param {string} s
 * @returns {string[]} addresses
 */
function restoreIpAddresses(s) {
    const addresses = [];
    const backtrack = (currentIp = new Array(4).fill(''), i = 0, position = 0) => {
        const len = s.length;

        if (position === 4 && i === len) {
            addresses.push(currentIp.join('.'));
        } else {
            if (len - i + currentIp.length < 4) {
                return;
            }
            if (currentIp[position] === '0') {
                return;
            }
            currentIp[position] += String(s[i]);
            if (Number(currentIp[position] <= 255)) {
                backtrack(currentIp.slice(), i + 1, position + 1);
                backtrack(currentIp.slice(), i + 1, position);
            }
        }
    };

    if (s.length < 4 || s.length > 12) {
        return [];
    }
    backtrack();

    return addresses;
}

module.exports = restoreIpAddresses;
