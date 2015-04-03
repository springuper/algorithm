var assert = require('assert');

/**
 * @param {number[]} A
 * @return {number}
 */
var removeDuplicates = function (A) {
    var i = 0,
        l = A.length;
    for (;i < l; i++) {
        while (A[i] == A[i + 1]) {
            A.splice(i + 1, 1);
            l--;
        }
    }
    return l;
};

assert(removeDuplicates([1, 1, 2]) == 2);
assert(removeDuplicates([1, 1]) == 1);
assert(removeDuplicates([1, 2]) == 2);
