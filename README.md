# everyN

[![Build Status](https://travis-ci.org/javiercejudo/everyN.svg)](https://travis-ci.org/javiercejudo/everyN)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/everyN/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/everyN?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/everyN/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/everyN)

Like [`Array.prototype.every`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every) but for every n-tuple

## Install

    npm i every-n

## Usage

```js
var everyTuple = require('every-n');

everyTuple(2, fixtures.isAscendingPair, [1, 5, 10]); // => true
everyTuple(2, fixtures.isAscendingPair, [8, 5, 10]); // => false
everyTuple(3, fixtures.isFibonacciTriple, [0, 1, 1, 2, 3, 5, 8, 13]); // => true
```

Please note the tuples are passed to the callback as individual arguments, not as an array.

See more examples of [fixture callbacks](fixtures/callbacks.js).
