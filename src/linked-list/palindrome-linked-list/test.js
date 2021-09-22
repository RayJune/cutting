// const isPalindrome = require('./index');
const isPalindrome = require('./optimize');
// const isPalindrome = require('./template');
// const isPalindrome = require('./template-zh');

class ListNode {
    /**
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 *
 * @param {Array} arr
 * @returns {ListNode}
 */
function buildListNode(arr) {
    const preHead = new ListNode(-1);
    let node = preHead;

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
    });

    return preHead.next;
}

test('define isPalindrome function', () => {
    expect(typeof isPalindrome).toBe('function');
});

test('head = [1, 2]', () => {
    expect(isPalindrome(buildListNode([1, 2]))).toBe(false);
});

test('head = [1, 2, 3]', () => {
    expect(isPalindrome(buildListNode([1, 2, 3]))).toBe(false);
});

test('head = [1, 2, 2, 1]', () => {
    expect(isPalindrome(buildListNode([1, 2, 2, 1]))).toBe(true);
});