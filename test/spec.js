/*jshint node:true, mocha:true */

'use strict';

require('should');

var everyN = require('../src/everyN');
var fixtures = require('../fixtures/callbacks');

describe('everyN', function() {
  it('should execute test for every n consecutive elements', function() {
    everyN(1, isFinite, [1, 5, 10]).should.be.exactly(true);
    everyN(1, isFinite, [1, 5, Infinity]).should.be.exactly(false);

    everyN(2, fixtures.isAscendingPair, [1, 5, 10]).should.be.exactly(true);
    everyN(2, fixtures.isAscendingPair, [1, 7, 3]).should.be.exactly(false);

    everyN(3, fixtures.isFibonacciTriple, [0, 1, 1, 2, 3, 5, 8, 13]).should.be.exactly(true);
    everyN(3, fixtures.isFibonacciTriple, [4, 7, 11, 18, 29]).should.be.exactly(true);
    everyN(3, fixtures.isFibonacciTriple, [0, 1, 1, 2, 3, 6, 8, 13]).should.be.exactly(false);
  });

  it('should return true when array is shorter than n', function() {
    everyN(2, fixtures.noop, [1]).should.be.exactly(true);
    everyN(2, fixtures.noop, []).should.be.exactly(true);
    everyN(3, fixtures.noop, [1, 2]).should.be.exactly(true);
  });

  it('should pass index and array to the callback', function() {
    everyN(2, fixtures.isFibonacciTripleWith2, [0, 1, 1, 2, 3, 5, 8, 13]).should.be.exactly(true);
    everyN(2, fixtures.isFibonacciTripleWith2, [4, 7, 11, 18, 29]).should.be.exactly(true);
    everyN(2, fixtures.isFibonacciTripleWith2, [0, 1, 1, 2, 3, 6, 8, 13]).should.be.exactly(false);

    everyN(3, fixtures.isFibonacciQuadrupletWith3, [0, 1, 1, 2, 3, 5, 8, 13]).should.be.exactly(true);
  });

  it('should execute the callback with the provided thisArg as this', function() {
    everyN(2, fixtures.isSqrt, [9, 3], Math).should.be.exactly(true);

    // alternative
    everyN(2, fixtures.isSqrt.bind(Math), [9, 3]).should.be.exactly(true);
  });
});
