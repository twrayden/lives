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
      c: 1
    }
  }
};

if (lives(hello, 'a.b.c')) {
  console.log(hello.a.b.c);
}

```
