const lives = require('./index');

const exists = { a: { b: { c: 1 } } };
const missing = { a: {} };

test('returns true if exists', () => {
  expect(lives(exists, 'a.b.c')).toBe(true);
});

test('return false if missing', () => {
  expect(lives(missing, 'a.b.c')).toBe(false);
})