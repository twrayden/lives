const lives = require('./index');

const exists = { a: { b: { c: 1 } } };
const missing = { a: {} };

test('returns true if exists', () => {
  expect(lives(exists, 'a.b.c')).toBe(true);
});

test('returns false if missing', () => {
  expect(lives(missing, 'a.b.c')).toBe(false);
});

test('returns value if exists', () => {
  expect(lives.get(exists, 'a.b.c')).toBe(1);
});

test('returns undefined if missing', () => {
  expect(lives.get(missing, 'a.b.c')).toBe(undefined);
});
