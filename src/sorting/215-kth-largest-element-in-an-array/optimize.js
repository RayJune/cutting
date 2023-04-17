/*
 * 215. Kth Largest Element in an Array
 *
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 *
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * Example 1:
 * Input: nums = [3, 2, 1, 5, 6, 4], k = 2
 * Output: 5
 *
 * Example 2:
 * Input: nums = [3, 2, 3, 1, 2, 4, 5, 5, 6], k = 4
 * Output: 4
 *
 * Constraints:
 * 1 <= k <= nums.length <= 10 ** 4
 * (-10) ** 4 <= nums[i] <= 10 ** 4
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
*/

/**
 * Quick Select Algorithm
 *
 * Time Complexity: O(n) = quickSelect 时间复杂度
 * Space complexity: O(log(n)) = quickSelect 函数调用栈深度
 * Auxiliary complexity: O(log(n)) = quickSelect 函数调用栈深度
 * 其中 n 是 nums 数组的长度
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function findKthLargest(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, k);
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @param {number} k
 * @returns {number}
 */
function quickSelect(arr, left, right, k) {
    const pivotIndex = partition(arr, left, right);
    const len = arr.length;

    if (k < len - pivotIndex) {
        return quickSelect(arr, pivotIndex + 1, right, k);
    } else if (k > len - pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    }

    return arr[pivotIndex];
};

/**
 * 把 pivot 先 swap 到末尾，再进行分区处理
 *
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function partition(arr, left, right) {
    const {pivot, pivotIndex} = getMedian(arr, left, right);
    let i = left;

    swap(arr, pivotIndex, right);
    for (let j = i; j < right; j++) {
        if (arr[j] < pivot) {
            swap(arr, i, j);
            i += 1;
        }
    }
    swap(arr, i, right);

    return i;
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} right
 * @returns {{pivot: number, pivotIndex: number}}
 */
function getMedian(arr, left, right) {
    let pivot = arr[left];
    let pivotIndex = left;
    const mid = left + Math.floor((right - left) / 2);

    if ((arr[mid] < arr[right] && arr[mid] > arr[left])
        || (arr[mid] > arr[right] && arr[mid] < arr[left])) {
        pivot = arr[mid];
        pivotIndex = mid;
    } else if ((arr[right] < arr[mid] && arr[right] > arr[left])
        || (arr[right] > arr[mid] && arr[right] < arr[left])) {
        pivot = arr[right];
        pivotIndex = right;
    }

    return {
        pivot,
        pivotIndex
    };
}

/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 */
function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = findKthLargest;
