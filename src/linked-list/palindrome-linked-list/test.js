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
    const head = buildListNode([1, 2]);
    const result = isPalindrome(head);

    expect(result).toBe(false);
    expect(head).toEqual(buildListNode([1, 2]));
});

test('head = [1, 2, 3]', () => {
    const head = buildListNode([1, 2, 3]);
    const result = isPalindrome(head);

    expect(result).toBe(false);
    expect(head).toEqual(buildListNode([1, 2, 3]));
});

test('head = [1, 2, 2, 1]', () => {
    const head = buildListNode([1, 2, 2, 1]);
    const result = isPalindrome(head);

    expect(result).toBe(true);
    expect(head).toEqual(buildListNode([1, 2, 2, 1]));
});
