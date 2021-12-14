// const addTwoNumbers = require('./index');
// const addTwoNumbers = require('./reverse-input');
const addTwoNumbers = require('./reverse-output');
// const addTwoNumbers = require('./template');
// const addTwoNumbers = require('./template-zh');

class ListNode {
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

test('define addTwoNumbers function', () => {
    expect(typeof addTwoNumbers).toBe('function');
});

test('l1 = [7, 2, 4, 3], l2 = [5, 6, 4]', () => {
    const l1 = buildListNode([7, 2, 4, 3]);
    const l2 = buildListNode([5, 6, 4]);
    const l3 = buildListNode([7, 8, 0, 7]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('l1 = [0], l2 = [0]', () => {
    const l1 = buildListNode([0]);
    const l2 = buildListNode([0]);
    const l3 = buildListNode([0]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('l1 = [2, 4, 3], l2 = [5, 6, 4]', () => {
    const l1 = buildListNode([2, 4, 3]);
    const l2 = buildListNode([5, 6, 4]);
    const l3 = buildListNode([8, 0, 7]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('l1 = [1, 1], l2 = [0]', () => {
    const l1 = buildListNode([1, 1]);
    const l2 = buildListNode([0]);
    const l3 = buildListNode([1, 1]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('l1 = [0], l2 = [1, 1]', () => {
    const l1 = buildListNode([0]);
    const l2 = buildListNode([1, 1]);
    const l3 = buildListNode([1, 1]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});

test('l1 = [9], l2 = [9]', () => {
    const l1 = buildListNode([9]);
    const l2 = buildListNode([9]);
    const l3 = buildListNode([1, 8]);

    expect(addTwoNumbers(l1, l2)).toEqual(l3);
});
