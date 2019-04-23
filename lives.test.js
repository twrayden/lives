const lives = require('./index');

const exists = { a: { b: { c: 1 } } };
const missing = { a: {} };
const shallow = {};

test('returns true if exists', () => {
  expect(lives(() => exists.a.b.c)).toBe(true);
});

test('returns false if missing', () => {
  expect(lives(() => missing.a.b.c)).toBe(false);
});

test('returns value if exists', () => {
  expect(lives.get(() => exists.a.b.c)).toBe(1);
});

test('returns undefined if missing', () => {
  expect(lives.get(() => missing.a.b.c)).toBe(undefined);
});

test('returns false if missing in shallow object', () => {
  expect(lives(() => shallow.a)).toBe(false);
});

test('returns value (not fallback) if exists', () => {
  expect(lives.or(() => exists.a.b.c, 2)).toBe(1);
});

test('returns fallback if missing', () => {
  expect(lives.or(() => missing.a.b.c, 2)).toBe(2);
});
