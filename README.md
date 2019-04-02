# lives

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
