/*
 * 468. 验证IP地址
 *
 * 编写一个函数来验证输入的字符串是否是有效的 IPv4 或 IPv6 地址。
 *
 * 如果是有效的 IPv4 地址，返回 "IPv4"；
 * 如果是有效的 IPv6 地址，返回 "IPv6";
 * 如果不是上述类型的 IP 地址，返回 "Neither";
 *
 * IPv4 地址由十进制数和点来表示，每个地址包含 4 个十进制数，其范围为 0 - 255，用 (".") 分隔，比如 172.16.254.1；
 *
 * 同时 IPv4 地址内的数不会以 0 开头。比如，地址 172.16.254.01 是不合法的。
 *
 * IPv6 地址由 8 组 16 进制的数字来表示，每组表示 16 比特。这些组通过 (":") 分割。
 * 比如 2001:0db8:85a3:0000:0000:8a2e:0370:7334 是一个有效的地址。
 * 而且，我们可以加入一些以 0 开头的数字，字母可以使用大写，也可以是小写。
 * 所以，"2001:db8:85a3:0:0:8A2E:0370:7334" 是一个有效的 IPv6 地址（即忽略 0 开头，忽略大小写）。
 *
 * 然而，我们不能因为某个组的值为 0，而使用一个空的组，以至于出现 (::) 的情况。比如 2001:0db8:85a3::8A2E:0370:7334 是无效的 IPv6 地址。
 *
 * 同时，在 IPv6 地址中，多余的 0 也是不被允许的。比如， 02001:0db8:85a3:0000:0000:8a2e:0370:7334 是无效的。
 *
 * Example 1:
 * Input: IP = "172.16.254.1"
 * Output: "IPv4"
 * Explanation: This is a valid IPv4 address, return "IPv4".
 *
 * Example 2:
 * Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 * Explanation: This is a valid IPv6 address, return "IPv6".
 *
 * Example 3:
 * Input: IP = "256.256.256.256"
 * Output: "Neither"
 * Explanation: This is neither a IPv4 address nor a IPv6 address.
 *
 * Example 4:
 * Input: IP = "2001:0db8:85a3:0:0:8A2E:0370:7334:"
 * Output: "Neither"
 *
 * Example 5:
 * Input: IP = "1e1.4.5.6"
 * Output: "Neither"
 *
 * Constraints:
 * IP consists only of English letters, digits and the characters '.' and ':'.
 *
 * https://leetcode.cn/problems/validate-ip-address/
*/

export default validIPAddress;
