/* jshint node:true */

'use strict';

var every2 = require('every2');

/**
 * Tests whether every n-tuple in the array pass the test
 * implemented by the provided function.
 *
 * @param  {Number} n The number of items to test against
 * @param  {Function} callback The function to call with every n-tuple
 * @param  {Array} array The array to iterate over
 * @param  {Boolean} thisArg Value to use as this when executing callback
 *
 * @return {Boolean}
 */
module.exports = function everyN(n, callback, array, thisArg) {
  if(array.length < n) {
    return true;
  }

  if (n === 1) {
    return array.every(callback, thisArg);
  }

  if (n === 2) {
    return every2(callback, array, thisArg);
  }

  var lengthMinusN = array.length - n;
  var index;
  var iterationArgs;

  for (index = 0; index <= lengthMinusN; index += 1) {
    iterationArgs = array.slice(index, index + n);
    iterationArgs.push(index + n - 1, array);

    if (!callback.apply(thisArg, iterationArgs)) {
      return false;
    }
  }

  return true;
};
