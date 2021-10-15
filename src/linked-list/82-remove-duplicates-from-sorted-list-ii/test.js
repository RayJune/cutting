const deleteDuplicates = require('./index');
// const deleteDuplicates = require('./template');
// const deleteDuplicates = require('./template-zh');

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

test('define deleteDuplicates function', () => {
    expect(typeof deleteDuplicates).toBe('function');
});

test('head = [1, 1, 1, 2, 3]', () => {
    const head = buildListNode([1, 1, 1, 2, 3]);
    const newHead = buildListNode([2, 3]);

    expect(deleteDuplicates(head)).toEqual(newHead);
});

test('head = [1, 2, 3, 3, 4, 4, 5]', () => {
    const head = buildListNode([1, 2, 3, 3, 4, 4, 5]);
    const newHead = buildListNode([1, 2, 5]);

    expect(deleteDuplicates(head)).toEqual(newHead);
});

test('head = []', () => {
    expect(deleteDuplicates(null)).toEqual(null);
});
