# lives

[![Build Status](https://travis-ci.org/thomasraydeniscool/lives.svg?branch=master)](https://travis-ci.org/thomasraydeniscool/lives)
[![Coverage Status](https://coveralls.io/repos/github/thomasraydeniscool/lives/badge.svg?branch=master)](https://coveralls.io/github/thomasraydeniscool/lives?branch=master)
[![Minified Size](https://badgen.net/bundlephobia/min/lives)](https://bundlephobia.com/result?p=lives)

> A variable lives here

```
npm i --save lives
```

### Usage

```javascript
const lives = require('lives');

const hello = {
  a: {
    b: {
      c: 'Hello'
    }
  }
};

if (lives(() => hello.a.b.c)) {
  console.log(hello.a.b.c, 'World!');
}

/**
 * OR
 */

console.log(lives.get(() => hello.a.b.c), 'World!');
```
