/* jshint node:true */

'use strict';

var every2 = require('every2');

/**
 * Tests whether every n-tuple in the array pass the test
 * implemented by the provided function.
 *
 * @param  {Number} n The number of items to test against
 * @param  {Array} array The array to iterate over
 * @param  {Function} callback The function to call with every n-tuple
 * @param  {Boolean} thisArg Value to use as this when executing callback
 *
 * @return {Boolean}
 */
module.exports = function everyN(n, array, callback, thisArg) {
  if(array.length < n) {
    return true;
  }

  if (n === 1) {
    return array.every(callback, thisArg);
  }

  if (n === 2) {
    return every2(array, callback, thisArg);
  }

  var lengthMinus1 = array.length - 1;
  var index;
  var iterationArgs;

  for (index = n; index < lengthMinus1; index += 1) {
    iterationArgs = array.slice(index - n, index);
    iterationArgs.push(index - 1, array);

    if (!callback.apply(thisArg, iterationArgs)) {
      return false;
    }
  }

  return true;
};
