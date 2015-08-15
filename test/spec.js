/*jshint node:true, mocha:true */

'use strict';

require('should');

var everyN = require('../src/everyN');
var fixtures = require('../fixtures/callbacks');

describe('everyN', function() {
  it('should execute test for every n consecutive elements', function() {
    everyN(2, [1, 5, 10], fixtures.isAscending).should.be.true;
    everyN(2, [1, 7, 3], fixtures.isAscending).should.be.false;

    everyN(3, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciIncrement).should.be.true;
    everyN(3, [4, 7, 11, 18, 29], fixtures.isFibonacciIncrement).should.be.true;
    everyN(3, [0, 1, 1, 2, 3, 6, 8, 13], fixtures.isFibonacciIncrement).should.be.false;
  });

  it('should return true when array is shorter than n', function() {
    everyN(2, [1], fixtures.noop).should.be.true;
    everyN(2, [], fixtures.noop).should.be.true;
  });

  it('should pass index and array to the callback', function() {
    everyN(2, [0, 1, 1, 2, 3, 5, 8, 13], fixtures.isFibonacciIncrementWith2).should.be.true;
    everyN(2, [4, 7, 11, 18, 29], fixtures.isFibonacciIncrementWith2).should.be.true;
    everyN(2, [0, 1, 1, 2, 3, 6, 8, 13], fixtures.isFibonacciIncrementWith2).should.be.false;
  });

  it('should execute the callback with the provided thisArg as this', function() {
    everyN(2, [9, 3], fixtures.isSqrt, Math).should.be.true;
  });
});