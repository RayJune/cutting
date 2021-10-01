const getKthFromEnd = require('./index');
// const getKthFromEnd = require('./template');

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

test('define getKthFromEnd function', () => {
    expect(typeof getKthFromEnd).toBe('function');
});

test('head = [1], n = 1', () => {
    const head = buildListNode([1]);

    expect(getKthFromEnd(head, 1)).toBe(head);
});

test('head = [1, 2, 3, 4, 5], n = 2', () => {
    const head = buildListNode([1, 2, 3, 4, 5]);
    const targetNode = buildListNode([4, 5]);

    expect(getKthFromEnd(head, 2)).toEqual(targetNode);
});
