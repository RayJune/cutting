/*
 * 给定一个只包含数字的字符串，用以表示一个 IP 地址，返回所有可能从 s 获得的有效 ip 地址。你可以按任何顺序返回答案。
 *
 * 有效 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有先导 0），整数之间用 '.' 分隔。
 *
 * 例如 "0.1..2.201" 和 "192.168.1.1" 是有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1 是无效 IP 地址"
 * Example 1:
 * Input: s = "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 * Example 2:
 * Input: nums = "0000"
 * Output: ["0.0.0.0"]
 *
 * Example 3:
 * Input: nums = "1111"
 * Output: ["1.1.1.1"]
 *
 * Example 4:
 * Input: nums = "010010"
 * Output: ["0.10.0.10", "0.100.1.0"]
 *
 * Example 5:
 * Input: nums = "101023"
 * Output:  ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 *
 * 提示:
 * 1 <= s.length <= 3000
 * s consists of digits only.
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 *
*/

module.exports = restoreIpAddresses;
