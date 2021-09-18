// const mergeTwoLists = require('./index');
const mergeTwoLists = require('./optimize');
// const mergeTwoLists = require('./template');
// const mergeTwoLists = require('./template-zh');

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
 *
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

test('define mergeTwoLists function', () => {
    expect(typeof mergeTwoLists).toBe('function');
});

test('l1 = [1, 2, 4], l2 = [1, 3, 4]', () => {
    const l1 = buildListNode([1, 2, 4]);
    const l2 = buildListNode([1, 3, 4]);
    const l3 = buildListNode([1, 1, 2, 3, 4, 4]);

    expect(mergeTwoLists(l1, l2)).toEqual(l3);
});

test('l1 = [0], l2 = []', () => {
    expect(mergeTwoLists(new ListNode(0), null)).toEqual(new ListNode(0));
});

test('l1 = [], l2 = []', () => {
    expect(mergeTwoLists(null, null)).toEqual(null);
});

test('l1 = [], l2 = [0]', () => {
    expect(mergeTwoLists(null, new ListNode(0))).toEqual(new ListNode(0));
});
