const ListNode = require('./list-node');
// const reverseBetween = require('./index');
const reverseBetween = require('./optimize');
// const reverseBetween = require('./template');
// const reverseBetween = require('./template-zh');

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

test('define reverseBetween function', () => {
    expect(typeof reverseBetween).toBe('function');
});

test('head = [1, 2, 3, 4, 5], left = 2, right = 4', () => {
    const list = buildListNode([1, 2, 3, 4, 5]);
    const reversedList = buildListNode([1, 4, 3, 2, 5]);

    expect(reverseBetween(list, 2, 4)).toEqual(reversedList);
});

test('head = [5], left = 1, right = 1', () => {
    const list = buildListNode([5]);
    const reversedList = buildListNode([5]);

    expect(reverseBetween(list, 1, 1)).toEqual(reversedList);
});

test('head = [3, 5], left = 1, right = 2', () => {
    const list = buildListNode([3, 5]);
    const reversedList = buildListNode([5, 3]);

    expect(reverseBetween(list, 1, 2)).toEqual(reversedList);
});
