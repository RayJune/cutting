/*
 * 705. Design HashSet
 *
 * Design a HashSet without using any built-in hash table libraries.
 *
 * Implement MyHashSet class:
 *
 * void add(key) Inserts the key key into the HashSet.
 * bool contains(key) Returns whether the key key exists in the HashSet or not.
 * void remove(key) Removes the key key in the HashSet. If key does not exist in the HashSet, do nothing.
 *
 * Example 1:
 * Input
 * ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"]
 * [[], [1], [2], [1], [3], [2], [2], [2], [2]]
 * Output
 * [null, null, null, true, false, null, true, null, false]
 *
 * Explanation
 * MyHashSet myHashSet = new MyHashSet();
 * myHashSet.add(1);      // set = [1]
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(1); // return True
 * myHashSet.contains(3); // return False, (not found)
 * myHashSet.add(2);      // set = [1, 2]
 * myHashSet.contains(2); // return True
 * myHashSet.remove(2);   // set = [1]
 * myHashSet.contains(2); // return False, (already removed)
 *
 * Constraints:
 * 0 <= key <= 10 ** 6
 * At most 10 ** 4 calls will be made to add, remove, and contains.
 *
 * https://leetcode.com/problems/design-hashset/
*/

/**
 * 用数组作为 bucket 来解决哈希冲突
 *
 * Time Complexity: O(n / k) = 假设哈希值是均匀分布的，则每个 bucket 长度为 n / k
 * Space complexity: O(n + k) = this.#hashBucket 占用的空间
 * Auxiliary complexity: O(n + k) = this.#hashBucket 占用的空间
 *
 * 其中 n 是哈希表中的元素数量，k 是预先定义的 buckets 个数（在这里是 769）
 */
class MyHashSet {
    #keyRange = 769;
    #hashBucket = new Array(this.#keyRange).fill([]);

    /**
     * @param {number} key
     * @returns {number}
     */
    #hash(key) {
        return key % this.#keyRange;
    }

    #getBucket(key) {
        return this.#hashBucket[this.#hash(key)];
    }

    /**
     * @param {number} key
     */
    add(key) {
        const bucket = this.#getBucket(key);

        if (!bucket.includes(key)) {
            bucket.push(key);
        }
    }

    /**
     * @param {number} key
     * @returns {boolean}
     */
    contains(key) {
        const bucket = this.#getBucket(key);

        return bucket.includes(key);
    }

    /**
     * @param {number} key
     */
    remove(key) {
        const bucket = this.#getBucket(key);
        const index = bucket.indexOf(key);

        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }
}

module.exports = MyHashSet;
