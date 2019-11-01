const lives = require('../index');

const exists = { a: { b: { c: 1 } } };
const missing = { a: {} };
const shallow = {};

describe('lives', () => {
  test('true if exists', () => {
    expect(lives(() => exists.a.b.c)).toBe(true);
  });

  test('true if exists w/ shallow', () => {
    expect(lives(() => exists.a)).toBe(true);
  });

  test('false if missing', () => {
    expect(lives(() => missing.a.b.c)).toBe(false);
  });

  test('false if missing w/ shallow', () => {
    expect(lives(() => shallow.a)).toBe(false);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives('');
    }).toThrow(TypeError);
  });
});

describe('lives.get', () => {
  test('value if exists', () => {
    expect(lives.get(() => exists.a.b.c)).toBe(1);
  });

  test('undefined if missing', () => {
    expect(lives.get(() => missing.a.b.c)).toBe(undefined);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives.get('');
    }).toThrow(TypeError);
  });
});

describe('lives.or', () => {
  test('value if exists', () => {
    expect(lives.or(() => exists.a.b.c, 2)).toBe(1);
  });

  test('fallback if missing', () => {
    expect(lives.or(() => missing.a.b.c, 2)).toBe(2);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives.or('', '');
    }).toThrow(TypeError);
  });

  test('value is undefined', () => {
    expect(lives.or(() => undefined, 1)).toBe(1);
  });
});

describe('lives.not', () => {
  test('true if missing', () => {
    expect(lives.not(() => missing.a.b.c)).toBe(true);
  });

  test('false if exists', () => {
    expect(lives.not(() => exists.a.b.c)).toBe(false);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives.not('');
    }).toThrow(TypeError);
  });
});

describe('lives.is', () => {
  test('true if number', () => {
    expect(lives.is(() => exists.a.b.c, 'number')).toBe(true);
  });

  test('false if not number', () => {
    expect(lives.is(() => missing.a.b.c, 'number')).toBe(false);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives.is('', '');
    }).toThrow(TypeError);
  });
});

describe('lives.key', () => {
  test('true if exists', () => {
    expect(lives.key(exists, 'a.b.c')).toBe(true);
  });

  test('true if exists w/ shallow', () => {
    expect(lives.key(exists, 'a')).toBe(true);
  });

  test('false if missing', () => {
    expect(lives.key(missing, 'a.b.c')).toBe(false);
  });

  test('false if missing w/ shallow', () => {
    expect(lives.key(shallow, 'a')).toBe(false);
  });

  test('throw if wrong arguments', () => {
    expect(() => {
      lives.key('', '');
    }).toThrow(TypeError);
  });
});
