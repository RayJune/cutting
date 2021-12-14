const reverseList = require('./index');
// const reverseList = require('./recursion');
// const reverseList = require('./template');
// const reverseList = require('./template-zh');

class ListNode {
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

test('define reverseList function', () => {
    expect(typeof reverseList).toBe('function');
});

test('head = [1, 2, 3, 4, 5]', () => {
    const list = buildListNode([1, 2, 3, 4, 5]);
    const reversedList = buildListNode([5, 4, 3, 2, 1]);

    expect(reverseList(list)).toEqual(reversedList);
});

test('head = [1, 2]', () => {
    const list = buildListNode([1, 2]);
    const reversedList = buildListNode([2, 1]);

    expect(reverseList(list)).toEqual(reversedList);
});

test('head = []', () => {
    const list = buildListNode([]);
    const reversedList = buildListNode([]);

    expect(reverseList(list)).toEqual(reversedList);
});
