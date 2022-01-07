// const detectCycle = require('./index');
const detectCycle = require('./optimize');
// const detectCycle = require('./template');
// const detectCycle = require('./template-zh');

class ListNode {
    constructor(val = undefined, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {number[]} arr
 * @param {number} position
 * @returns {{head: ListNode, arr: Array}}
 */
function buildListNode(arr, position) {
    let preHead = new ListNode(-1);
    let node = preHead;
    const nodeArr = [];

    arr.forEach(num => {
        node.next = new ListNode(num);
        node = node.next;
        nodeArr.push(node);
    });
    if (position !== -1) {
        node.next = nodeArr[position];
    }

    return {
        head: preHead.next,
        arr: nodeArr
    };
}

test('define detectCycle function', () => {
    expect(typeof detectCycle).toBe('function');
});

test('head = null, position = -1', () => {
    expect(detectCycle(null)).toBeNull();
});

test('head = [1], position = -1', () => {
    const {head} = buildListNode([1], -1);

    expect(detectCycle(head)).toBeNull();
});

test('head = [1, 2], position = 0', () => {
    const {head, arr} = buildListNode([1, 2], 0);

    expect(detectCycle(head)).toEqual(arr[0]);
});

test('head = [3, 2, 0, -4], position = 1', () => {
    const {head, arr} = buildListNode([3, 2, 0, -4], 1);

    expect(detectCycle(head)).toEqual(arr[1]);
});
