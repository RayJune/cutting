const restoreIpAddresses = require('./index');
// const restoreIpAddresses = require('./template');
// const restoreIpAddresses = require('./template-zh');

test('define restoreIpAddresses function', () => {
    expect(typeof restoreIpAddresses).toBe('function');
});

test('s = "0000"', () => {
    const addresses = restoreIpAddresses('0000');

    expect(addresses).toEqual(['0.0.0.0']);
});

test('s = "1111"', () => {
    const addresses = restoreIpAddresses('1111');

    expect(addresses).toEqual(['1.1.1.1']);
});

test('s = "25525511135"', () => {
    const addresses = restoreIpAddresses('25525511135');

    expect(addresses).toHaveLength(2);
    expect(addresses).toEqual(expect.arrayContaining([
        '255.255.11.135',
        '255.255.111.35'
    ]));
});

test('s = "010010"', () => {
    const addresses = restoreIpAddresses('010010');

    expect(addresses).toHaveLength(2);
    expect(addresses).toEqual(expect.arrayContaining([
        '0.10.0.10',
        '0.100.1.0'
    ]));
});

test('s = "101023"', () => {
    const addresses = restoreIpAddresses('101023');

    expect(addresses).toHaveLength(5);
    expect(addresses).toEqual(expect.arrayContaining([
        '1.0.10.23',
        '1.0.102.3',
        '10.1.0.23',
        '10.10.2.3',
        '101.0.2.3'
    ]));
});

test('s = "1', () => {
    expect(restoreIpAddresses('1')).toEqual([]);
});

test('s = "01234567890123"', () => {
    const addresses = restoreIpAddresses('01234567890123');

    expect(addresses).toEqual([]);
});
