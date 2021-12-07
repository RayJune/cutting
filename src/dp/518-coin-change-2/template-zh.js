/*
 * 518. 零钱兑换 II
 *
 * 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。
 *
 * 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。
 *
 * 假设每一种面额的硬币有无限个。 
 *
 * Example 1:
 * Input: amount = 5, coins = [1, 2, 5]
 * Output: 4
 * Explanation: there are four ways to make up the amount:
 * 5 = 5
 * 5 = 2 + 2 + 1
 * 5 = 2 + 1 + 1 + 1
 * 5 = 1 + 1 + 1 + 1 + 1
 *
 * Example 2:
 * Input: amount = 3, coins = [2]
 * Output: 0
 *
 * Example 3:
 * amount = 10, coins = [10]
 * Output: 1
 *
 * https://leetcode-cn.com/problems/coin-change-2/
*/

module.exports = change;
