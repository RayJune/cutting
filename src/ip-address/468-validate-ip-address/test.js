const validateIPAddress = require('./index');
// const validateIPAddress = require('./template');
// const validateIPAddress = require('./template-zh');

test('define validateIPAddress function', () => {
    expect(typeof validateIPAddress).toBe('function');
});

test('ip = 1', () => {
    expect(validateIPAddress('1')).toBe('Neither');
});

test('ip = 172.16.254.1', () => {
    expect(validateIPAddress('172.16.254.1')).toBe('IPv4');
});

test('ip = 2001:0db8:85a3:0:0:8A2E:0370:7334', () => {
    expect(validateIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334')).toBe('IPv6');
});

test('ip = 256.256.256.256', () => {
    expect(validateIPAddress('256.256.256.256')).toBe('Neither');
});

test('ip = 2001:0db8:85a3:0:0:8A2E:0370:7334:', () => {
    expect(validateIPAddress('2001:0db8:85a3:0:0:8A2E:0370:7334:')).toBe('Neither');
});

test('ip = 1e1.4.5.6', () => {
    expect(validateIPAddress('1e1.4.5.6')).toBe('Neither');
});

test('ip = 2001:0db8:85a3:0000:0:8A2E:0370:733a', () => {
    expect(validateIPAddress('2001:0db8:85a3:0000:0:8A2E:0370:733a')).toBe('IPv6');
});


test('ip = "12..33.4"', () => {
    expect(validateIPAddress('12..33.4')).toBe('Neither');
});

test('ip = "12..33.4"', () => {
    expect(validateIPAddress('01.01.01.01')).toBe('Neither');
});

test('ip = 2001:0db8:85a3:00000:0:8A2E:0370:7334', () => {
    expect(validateIPAddress('2001:0db8:85a3:00000:0:8A2E:0370:7334')).toBe('Neither');
});

test('ip = 12.12.12.12.12', () => {
    expect(validateIPAddress('12.12.12.12.12')).toBe('Neither');
});

test('ip = 20EE:FGb8:85a3:0:0:8A2E:0370:7334', () => {
    expect(validateIPAddress('20EE:FGb8:85a3:0:0:8A2E:0370:7334')).toBe('Neither');
});
