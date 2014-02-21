/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 数组切块
 * @method chunk
 * @param {Number} size
 * @return {Array}
 */
Array.prototype.chunk = function (size) {
    var ret = [],
        i, len;

    for (i = 0, len = this.length; i < len; i += size) {
        ret.push(this.slice(i, i + size));
    }

    return ret;
};

assert.deepEqual([1, 2, 3, 4, 5].chunk(2), [[1, 2], [3, 4], [5]], 'even chunk failed');
assert.deepEqual([1, 2, 3, 4, 5].chunk(3), [[1, 2, 3], [4, 5]], 'odd chunk failed');
assert.deepEqual([1, 2, 3, 4].chunk(2), [[1, 2], [3, 4]], 'even chunk failed');
assert.deepEqual([1, 2, 3, 4].chunk(3), [[1, 2, 3], [4]], 'odd chunk failed');
assert.deepEqual([1].chunk(2), [[1]], 'single failed');
assert.deepEqual([].chunk(2), [], 'empty failed');
