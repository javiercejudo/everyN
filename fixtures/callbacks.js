/*jshint node:true, mocha:true */

'use strict';

module.exports = {
  isAscendingPair: isAscendingPair,
  isFibonacciTriple: isFibonacciTriple,
  isFibonacciTripleWith2: isFibonacciTripleWith2,
  isFibonacciQuadrupletWith3: isFibonacciQuadrupletWith3,
  isSqrt: isSqrt,
  noop: noop
};


function isAscendingPair(a, b) {
  return b > a;
}

function isFibonacciTriple(a, b, c) {
  return a + b === c;
}

function isFibonacciTripleWith2(a, b, index, array) {
  if (index < 2) {
    return b >= a;
  }

  return isFibonacciTriple(array[index - 2], a, b);
}

function isFibonacciQuadrupletWith3(a, b, c, index, array) {
  if (index < 4) {
    return b >= a && c >=b;
  }

  return isFibonacciTriple(array[index - 3], a, b) && isFibonacciTriple(a, b, c);
}

function isSqrt(a, b) {
  return this.sqrt(a) === b;
}

function noop() {}
