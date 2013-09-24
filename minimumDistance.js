/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 查找最小数组距离
 * @link http://acm.sdut.edu.cn/sdutoj/problem.php?action=showproblem&problemid=1228
 * @method findMinimumDistance
 * @param {Array} a
 * @param {Array} b
 * @return {Number}
 */
function findMinimumDistance(a, b) {
    var minimum = Number.POSITIVE_INFINITY,
        x, y,
        i = 0,
        j = 0,
        la = a.length,
        lb = b.length;

    while (i < la && j < lb) {
        x = a[i];
        y = b[j];
        if (x > y) {
            minimum = Math.min(minimum, x - y);
            j++;
        } else {
            minimum = Math.min(minimum, y - x);
            i++;
        }
        if (minimum === 0) break;
    }

    return minimum;
}

assert.deepEqual(findMinimumDistance([1, 2, 3], [4, 5, 6]), 1, 'non-intersection failed');
assert.deepEqual(findMinimumDistance([1, 2, 3], [3, 4, 5]), 0, 'intersection failed');
assert.deepEqual(findMinimumDistance([1, 3, 5], [2, 4, 6]), 1, 'intersection failed');
