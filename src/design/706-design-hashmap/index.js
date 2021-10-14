/*
 * 706. Design HashMap
 *
 * Design a HashMap without using any built-in hash table libraries.
 *
 * Implement the MyHashMap class:
 *
 * MyHashMap() initializes the object with an empty map.
 * void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
 * int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
 * void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
 *
 * Example 1:
 * Input
 * ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
 * [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
 *
 * Output
 * [null, null, null, 1, -1, null, 1, null, -1]
 *
 * Explanation
 * MyHashMap myHashMap = new MyHashMap();
 * myHashMap.put(1, 1); // The map is now [[1, 1]]
 * myHashMap.put(2, 2); // The map is now [[1, 1], [2, 2]]
 * myHashMap.get(1);    // return 1, The map is now [[1, 1], [2, 2]]
 * myHashMap.get(3);    // return -1 (i.e., not found), The map is now [[1, 1], [2, 2]]
 * myHashMap.put(2, 1); // The map is now [[1, 1], [2, 1]] (i.e., update the existing value)
 * myHashMap.get(2);    // return 1, The map is now [[1, 1], [2, 1]]
 * myHashMap.remove(2); // remove the mapping for 2, The map is now [[1, 1]]
 * myHashMap.get(2);    // return -1 (i.e., not found), The map is now [[1, 1]]
 *
 * Constraints:
 *
 * 0 <= key, value <= 10^6
 * At most 10^4 calls will be made to put, get, and remove.
 *
 * https://leetcode.com/problems/design-hashmap/
 *
*/

/**
 * 用数组作为 bucket 来解决哈希冲突
 *
 * Time Complexity: O(n / k) = 假设哈希值是均匀分布的，则每个 bucket 长度为 n / k
 * Space complexity: O(n + k) = this.#hashKey 占用的空间 O(n + 2k)
 * Auxiliary complexity: O(n + k) = this.#hashKey 占用的空间 O(n + 2k)
 * 其中 n 是哈希表中的元素数量，k 是预先定义的 buckets 个数（在这里是 769）
 */
class MyHashMap {
    #keyRange = 769;
    #hashKey = new Array(this.#keyRange).fill([]);

    /**
     * @param {number} key
     * @returns {number}
     */
    #hash(key) {
        return key % this.#keyRange;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        const hash = this.#hash(key);
        const bucket = this.#hashKey[hash];

        for (const item of bucket) {
            if (item[0] === key) {
                item[1] = value;

                return;
            }
        }
        bucket.push([key, value]);
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        const hash = this.#hash(key);
        const bucket = this.#hashKey[hash];

        for (const item of bucket) {
            if (item[0] === key) {
                return item[1];
            }
        }

        return -1;
    }

    /**
     * @param {number} key
     */
    remove(key) {
        const hash = this.#hash(key);
        const bucket = this.#hashKey[hash];
        const index = bucket.findIndex(item => item[0] === key);

        if (index !== -1) {
            bucket.splice(index, 1);
        }
    }
}

module.exports = MyHashMap;
