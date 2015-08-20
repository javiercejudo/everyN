/*jshint node:true, mocha:true */

'use strict';

require('should');

var everyN = require('../src/everyN');
var fixtures = require('../fixtures/callbacks');

describe('everyN', function() {
  it('should execute test for every n consecutive elements', function() {
    everyN(1, [1, 5, 10], isFinite).should.be.true;
    everyN(1, [1, 5, Infinity], isFinite).should.be.false;

    everyN(2, [1, 5, 10], fixtures.isAscendingPair).should.be.true;
    everyN(2, [1, 7, 3], fixtures.isAscendingPair).should.be.false;

    everyN(3, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciTriple).should.be.true;
    everyN(3, [4, 7, 11, 18, 29], fixtures.isFibonacciTriple).should.be.true;
    everyN(3, [0, 1, 1, 2, 3, 6, 8, 13], fixtures.isFibonacciTriple).should.be.false;
  });

  it('should return true when array is shorter than n', function() {
    everyN(2, [1], fixtures.noop).should.be.true;
    everyN(2, [], fixtures.noop).should.be.true;
    everyN(3, [1, 2], fixtures.noop).should.be.true;
  });

  it('should pass index and array to the callback', function() {
    everyN(2, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciTripleWith2).should.be.true;
    everyN(2, [4, 7, 11, 18, 29], fixtures.isFibonacciTripleWith2).should.be.true;
    everyN(2, [0, 1, 1, 2, 3, 6, 8, 13], fixtures.isFibonacciTripleWith2).should.be.false;

    everyN(3, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciQuadrupletWith3).should.be.true;
  });

  it('should execute the callback with the provided thisArg as this', function() {
    everyN(2, [9, 3], fixtures.isSqrt, Math).should.be.true;
  });
});
