# lives

[![Build Status](https://travis-ci.org/thomasraydeniscool/lives.svg?branch=master)](https://travis-ci.org/thomasraydeniscool/lives)
[![Coverage Status](https://coveralls.io/repos/github/thomasraydeniscool/lives/badge.svg?branch=master)](https://coveralls.io/github/thomasraydeniscool/lives?branch=master)
[![Minified Size](https://badgen.net/bundlephobia/min/lives)](https://bundlephobia.com/result?p=lives)

> A variable lives here

Save yourself from messy & unreliable nested object checking.

- Tiny w/ zero dependencies (500B minified)
- 100% test coverage
- Works in Node.js and legacy browser environments
- Includes useful helper functions for different use cases

```
npm i --save lives
```

## Usage

### Lives(attempt)

```javascript
const lives = require('lives');

const hello = {
  a: {
    b: {
      c: 'Hello'
    }
  }
};

const missing = {
  a: null
};

if (lives(() => hello.a.b.c)) {
  console.log(hello.a.b.c, 'World!'); // Hello World!
}
```

### Lives.key(target, key)

```javascript
if (lives.key(hello, 'a.b.c')) {
  console.log(hello.a.b.c, 'World!'); // Hello World!
}
```

### Lives.not(attempt)

```javascript
if (lives.not(() => missing.a.b.c)) {
  throw new Error('Variable is missing!');
}
```

### Lives.get(attempt)

```javascript
console.log(lives.get(() => hello.a.b.c), 'World!'); // Hello World!

lives.get(() => missing.a.b.c); // undefined
```

### Lives.or(attempt, fallback)

```javascript
console.log(lives.or(() => missing.a.b.c, 'Hello'), 'World!'); // Hello World!
```

### Lives.is(attempt, type)

```javascript
lives.is(() => hello.a.b.c, 'string'); // True

lives.is(() => hello.a.b.c, 'boolean'); // False

lives.is(() => missing.a.b.c, 'string'); // False

lives.is(() => missing.a.b.c, 'undefined'); // True
```
