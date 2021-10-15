const swapPairs = require('./index');
// const swapPairs = require('./template');
// const swapPairs = require('./template-zh');

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

test('define swapPairs function', () => {
    expect(typeof swapPairs).toBe('function');
});


test('head = []', () => {
    expect(swapPairs(null)).toBeNull();
});

test('head = [1]', () => {
    const head = buildListNode([1]);

    expect(swapPairs(head)).toBe(head);
    expect(swapPairs(head)).toEqual(head);
});

test('head = [1, 2, 3, 4]', () => {
    const head = buildListNode([1, 2, 3, 4]);
    const newHead = buildListNode([2, 1, 4, 3]);

    // 这里其实不够严谨，题目的要求是交换节点的位置；为了简化测试代码使用了 newHead 的方式来判断
    expect(swapPairs(head)).toEqual(newHead);
});

