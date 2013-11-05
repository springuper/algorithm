/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 查找最大连续乘积
 * @method findMaximumProduct
 * @param {Array} a
 * @return {Number}
 */
function findMaximumProduct(a) {
    var i,
        len = a.length,
        item,
        positive = [0],
        negative = [0],
        maximum = Number.NEGATIVE_INFINITY;

    if (len === 1) return a[0];

    for (i = 0; i < len; ++i) {
        item = a[i];
        positive[i + 1] = Math.max(
            positive[i] * item,
            item,
            negative[i] * item
        );
        negative[i + 1] = Math.min(
            positive[i] * item,
            item,
            negative[i] * item
        );
        if (positive[i + 1] > maximum) {
            maximum = positive[i + 1];
        }
    }

    return maximum;
}

assert.deepEqual(findMaximumProduct([3]), 3, 'single positive failed');
assert.deepEqual(findMaximumProduct([-3]), -3, 'single negative failed');
assert.deepEqual(findMaximumProduct([1, 2, 3]), 6, 'all positive failed');
assert.deepEqual(findMaximumProduct([-1, -2, -3]), 6, 'all negative failed');
assert.deepEqual(findMaximumProduct([0, 2, 3]), 6, 'all non-negative failed');
assert.deepEqual(findMaximumProduct([2, 0, 3]), 3, 'all non-negative failed');
assert.deepEqual(findMaximumProduct([0, -2, -3]), 6, 'all non-positive failed');
assert.deepEqual(findMaximumProduct([-2, 0, -3]), 0, 'all non-positive failed');
assert.deepEqual(findMaximumProduct([1, -2, -3]), 6, 'mix failed');
assert.deepEqual(findMaximumProduct([-1, 2, -3]), 6, 'mix failed');
assert.deepEqual(findMaximumProduct([5, -2, -3, 6]), 180, 'mix failed');
assert.deepEqual(findMaximumProduct([5, 2, -3, 6]), 10, 'mix failed');
