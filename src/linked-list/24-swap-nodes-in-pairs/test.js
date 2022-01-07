const swapPairs = require('./index');
// const swapPairs = require('./template');
// const swapPairs = require('./template-zh');
const buildListNode = require('../../utils/buildListNode');

test('define swapPairs function', () => {
    expect(typeof swapPairs).toBe('function');
});


test('head = []', () => {
    expect(swapPairs(buildListNode([]))).toBeNull();
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
