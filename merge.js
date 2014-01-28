var assert = require('assert');

function merge(a, b) {
    var c = [],
        i = 0, j = 0,
        lenA = a.length, lenB = b.length;
    while (i < lenA && j < lenB) {
        c.push(a[i] < b[j] ? a[i++] : b[j++]);
    }
    if (i < lenA) {
        c.push.apply(c, a.slice(i));
    }
    if (j < lenB) {
        c.push.apply(c, b.slice(j));
    }
    return c;
}

assert.deepEqual(merge([1, 2, 4, 7], [3, 5, 6, 8]), [1, 2, 3, 4, 5, 6, 7, 8]);
assert.deepEqual(merge([], []), []);
assert.deepEqual(merge([1], []), [1]);
assert.deepEqual(merge([], [2]), [2]);
