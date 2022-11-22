// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Tests for isPhoneNumber
test('123-456-7890 is a phone number', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('(234) 567-8901 is a phone number', () => {
    expect(functions.isPhoneNumber('(234) 567-8901')).toBe(true);
});
test('"apple" is not a phone number', () => {
    expect(functions.isPhoneNumber('apple')).toBe(false);
});
test('123456789 is not a phone number', () => {
    expect(functions.isPhoneNumber('apple')).toBe(false);
});

// Tests for isEmail
test('abc@def.com is an email', () => {
    expect(functions.isEmail('abc@def.com')).toBe(true);
});
test('someone@google.com is an email', () => {
    expect(functions.isEmail('someone@google.com')).toBe(true);
});
test('vscode is not an email', () => {
    expect(functions.isEmail('vscode')).toBe(false);
});
test('1234567890 is not an email', () => {
    expect(functions.isEmail('1234567890')).toBe(false);
});

// Tests for isStrongPassword
test('s153_3n is a strong password', () => {
    expect(functions.isStrongPassword('s153_3n')).toBe(true);
});
test('shoescomein2s is a strong password', () => {
    expect(functions.isStrongPassword('shoescomein2s')).toBe(true);
});
test('12345 is not a strong password', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});
test('ilikecheesebutter is not a strong password', () => {
    expect(functions.isStrongPassword('ilikecheeseandbutter')).toBe(false);
});

// Tests for isDate 
test('1/1/2000 is a date', () => {
    expect(functions.isDate('1/1/2000')).toBe(true);
});
test('9/04/1803 is a date', () => {
    expect(functions.isDate('9/04/1803')).toBe(true);
});
test('561/1/500 is not a date', () => {
    expect(functions.isDate('561/1/500')).toBe(false);
});
test('11/2000 is not a date', () => {
    expect(functions.isDate('11/2000')).toBe(false);
});

// Tests for isHexColor
test('FA9 is a hex color', () => {
    expect(functions.isHexColor('FA9')).toBe(true);
});
test('#1aA422 is a hex color', () => {
    expect(functions.isHexColor('#1aA422')).toBe(true);
});
test('A945 is not a hex color', () => {
    expect(functions.isHexColor('A945')).toBe(false);
});
test('GA9 is not a hex color', () => {
    expect(functions.isHexColor('GA9')).toBe(false);
});
