/*
 * 658. Find K Closest Elements
 *
 * Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
 *
 * An integer a is closer to x than an integer b if:
 *
 * |a - x| < |b - x|, or
 * |a - x| == |b - x| and a < b
 *
 * Example 1:
 * Input: arr = [1, 2, 3, 4, 5], k = 4, x = 3
 * Output: [1, 2, 3, 4]
 *
 * Example 2:
 * Input: arr = [1, 2, 3, 4, 5], k = 4, x = -1
 * Output: [1, 2, 3, 4]
 *
 * Constraints:
 * 1 <= k <= arr.length
 * 1 <= arr.length <= 10 ** 4
 * arr is sorted in ascending order.
 * (-10 ** 4) <= arr[i], x <= 10 ** 4
 *
 * https://leetcode.com/problems/find-k-closest-elements/
*/

/**
 * Binary Search + Sliding Window
 *
 * Time Complexity: O(log(n) + k) = while 循环次数 O(log(n)) + slice 方法 O(k)
 * Space complexity: O(k) = 结果数组的长度
 * Auxiliary complexity: O(1)
 *
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @returns {number[]}
 */
function findClosestElements(arr, k, x) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);

        if (x - arr[mid] > arr[mid + k] - x) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return arr.slice(left, left + k);
}

export default findClosestElements;
