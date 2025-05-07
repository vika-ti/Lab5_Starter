// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// isPhoneNumber tests
test('isPhoneNumber returns true for 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('isPhoneNumber returns true for (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('isPhoneNumber returns false for 1234567', () => {
  expect(isPhoneNumber('1234567')).toBe(false);
});

test('isPhoneNumber returns false for hello world', () => {
  expect(isPhoneNumber('hello world')).toBe(false);
});

// isEmail tests
test('isEmail returns true for user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('isEmail returns true for abc@xyz.co', () => {
  expect(isEmail('abc@xyz.co')).toBe(true);
});

test('isEmail returns false for user@com', () => {
  expect(isEmail('user@com')).toBe(false);
});

test('isEmail returns false for not-an-email', () => {
  expect(isEmail('not-an-email')).toBe(false);
});

// isStrongPassword tests
test('isStrongPassword returns true for abc123', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('isStrongPassword returns true for X_y12345', () => {
  expect(isStrongPassword('X_y12345')).toBe(true);
});

test('isStrongPassword returns false for 1234', () => {
  expect(isStrongPassword('1234')).toBe(false);
});

test('isStrongPassword returns false for too long password', () => {
  expect(isStrongPassword('a'.repeat(20))).toBe(false);
});

// isDate tests
test('isDate returns true for 12/31/2024', () => {
  expect(isDate('12/31/2024')).toBe(true);
});

test('isDate returns true for 1/1/2000', () => {
  expect(isDate('1/1/2000')).toBe(true);
});

test('isDate returns false for 2024-12-31', () => {
  expect(isDate('2024-12-31')).toBe(false);
});

test('isDate returns false for Jan 1, 2000', () => {
  expect(isDate('Jan 1, 2000')).toBe(false);
});

// isHexColor tests
test('isHexColor returns true for #fff', () => {
  expect(isHexColor('#fff')).toBe(true);
});

test('isHexColor returns true for #123ABC', () => {
  expect(isHexColor('#123ABC')).toBe(true);
});

test('isHexColor returns false for green', () => {
  expect(isHexColor('green')).toBe(false);
});

test('isHexColor returns false for #1234', () => {
  expect(isHexColor('#1234')).toBe(false);
});