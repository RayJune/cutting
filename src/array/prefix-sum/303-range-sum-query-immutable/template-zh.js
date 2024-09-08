/*
 * 303. 区域和检索 - 数组不可变
 *
 * 给定一个整数数组 nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。
 *
 * 实现 NumArray 类：
 *
 * NumArray(int[] nums) 使用数组 nums 初始化对象
 * int sumRange(int i, int j) 返回数组 nums 从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点（也就是 sum(nums[i], nums[i + 1], ... , nums[j])）
 *
 * Example 1:
 * Input: ["NumArray", "sumRange", "sumRange", "sumRange"]
 * [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
 * Output: [null, 1, -1, -3]
 *
 * Constraints:
 * 1 <= nums.length <= 10 ** 4
 * (-10) ** 5 <= nums[i] <= 10 ** 5
 * 0 <= left <= right < nums.length
 * At most 10 ** 4 calls will be made to sumRange.
 *
 * https://leetcode.cn/problems/range-sum-query-immutable/
*/

export default NumArray;
