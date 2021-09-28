const removeNthFromEnd = require('./index');
// const removeNthFromEnd = require('./template');
// const removeNthFromEnd = require('./template-zh');

class ListNode {
    /**
     * @param {string} val
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
    let preHead = new ListNode(-1);
    let node = preHead;

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
    });

    return preHead.next;
}

test('define removeNthFromEnd function', () => {
    expect(typeof removeNthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    const head = buildListNode([1]);

    expect(removeNthFromEnd(head, 1)).toBeNull();
});

test('head = [1, 2], n = 1', () => {
    const head = buildListNode([1, 2]);
    const newHead = buildListNode([1]);

    expect(removeNthFromEnd(head, 1)).toEqual(newHead);
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const newHead = buildListNode([1, 2, 3, 5]);

    expect(removeNthFromEnd(head, 2)).toEqual(newHead);
});
