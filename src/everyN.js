/* jshint node:true */

'use strict';

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

  var length = array.length;
  var items = array.slice(0, n - 1);
  var iterationArgs;
  var index;

  for (index = n - 1; index < length; index += 1) {
    items.push(array[index]);
    iterationArgs = items.concat([index, array])

    if (!callback.apply(thisArg, iterationArgs)) {
      return false;
    }

    items.shift();
  }

  return true;
};
