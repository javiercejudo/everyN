/*jshint node:true, mocha:true */

'use strict';

module.exports = {
  isAscending: isAscending,
  isFibonacciIncrement: isFibonacciIncrement,
  isFibonacciIncrementWith2: isFibonacciIncrementWith2,
  isSqrt: isSqrt,
  noop: noop
};


function isAscending(a, b) {
  return b > a;
}

function isFibonacciIncrement(a, b, c) {
  return a + b === c;
}

function isFibonacciIncrementWith2(a, b, index, array) {
  if (index < 2) {
    return b >= a;
  }

  return isFibonacciIncrement(array[index - 2], a, b);
}

function isSqrt(a, b) {
  return this.sqrt(a) === b;
}

function noop() {}
