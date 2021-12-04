/*
 * 93. 复原 IP 地址
 *
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。
 *
 * 例如："0.1.2.201" 和 "192.168.1.1" 是有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是无效 IP 地址。
 *
 * 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按任何顺序返回答案。
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
 * https://leetcode-cn.com/problems/restore-ip-addresses/
*/

module.exports = restoreIpAddresses;
