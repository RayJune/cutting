/*
 * 322. Coin Change
 *
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 *
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * You may assume that you have an infinite number of each kind of coin.
 *
 * Example 1:
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 * Example 3:
 * Input: coins = [1], amount = 0
 * Output: 0
 *
 * Example 4:
 * Input: coins = [1], amount = 1
 * Output: 1
 *
 * Example 5:
 * Input: coins = [1], amount = 2
 * Output: 2
 *
 * Constraints:
 * 1 <= coins.length <= 12
 * 1 <= coins[i] <= 2 ** 31 - 1
 * 0 <= amount <= 10 ** 4
 *
 * https://leetcode.com/problems/coin-change/
*/

/**
 * Dynamic Programming, dp[i] 表示兑换面额 i 所需要的最少硬币数
 *
 * Time Complexity: O(n * s) = 两层 for 循环次数之和
 * Space complexity: O(s) = dp 数组长度
 * Auxiliary complexity: O(s) = dp 数组长度
 * 其中 n 是 coins 的长度，s 是 amount 的值
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    const dp = new Array(amount + 1).fill(Infinity);

    dp[0] = 0;
    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

module.exports = coinChange;
