# everyN

[![Build Status](https://travis-ci.org/javiercejudo/everyN.svg)](https://travis-ci.org/javiercejudo/everyN)
[![Coverage Status](https://coveralls.io/repos/javiercejudo/everyN/badge.svg?branch=master)](https://coveralls.io/r/javiercejudo/everyN?branch=master)
[![Code Climate](https://codeclimate.com/github/javiercejudo/everyN/badges/gpa.svg)](https://codeclimate.com/github/javiercejudo/everyN)

Like `Array.prototype.every` but for every n

## Install

    npm i everyN

## Usage

```js
var everyN = require('everyN');

everyN(2, [1, 5, 10], fixtures.isAscending); // => true
everyN(2, [8, 5, 10], fixtures.isAscending); // => false
everyN(3, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciIncrement); // => true
```