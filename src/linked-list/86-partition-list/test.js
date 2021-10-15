const partition = require('./index');
// const partition = require('./template');
// const partition = require('./template-zh');

class ListNode {
    constructor(val, next = null) {
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

test('define partition function', () => {
    expect(typeof partition).toBe('function');
});

test('head = [], x = 1', () => {
    expect(partition(null, 1)).toBeNull();
});

test('head = [1], x = 2', () => {
    const head = buildListNode([1]);

    expect(partition(head, 2)).toEqual(head);
});

test('head = [2, 1], x = 2', () => {
    const head = buildListNode([2, 1]);
    const newHead = buildListNode([1, 2])

    expect(partition(head, 2)).toEqual(newHead);
});

test('head = [1, 4, 3, 2, 5, 2], x = 3', () => {
    const head = buildListNode([1, 4, 3, 2, 5, 2]);
    const newHead = buildListNode([1, 2, 2, 4, 3, 5])

    expect(partition(head, 3)).toEqual(newHead);
});
