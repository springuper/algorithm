/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * N皇后问题
 * @method figureQueenPuzzle
 * @param {Nubmer} n
 * @return {Array}
 */
function figureQueenPuzzle(n) {
    var list = [],
        pos = [0, 0],
        last;

    while (list.length < n) {
        if (validate(list, pos)) {
            list.push(pos);
            pos = [pos[0] + 1, 0];
        } else {
            if (pos[1] < n - 1) {
                // try next
                pos = [pos[0], pos[1] + 1];
            } else {
                // backtrace
                last = null;
                while (list.length) {
                    last = list.pop();
                    if (last[1] < n - 1) break;
                }
                if (!last || last[1] === n - 1) return null;
                pos = [last[0], last[1] + 1];
            }
        }
    }

    return list;
}

function validate(list, pos) {
    var i, len, item;
    for (i = 0, len = list.length; i < len; ++i) {
        item = list[i];
        if (item[0] === pos[0] ||
            item[1] === pos[1] ||
            (Math.abs(item[0] - pos[0]) === Math.abs(item[1] - pos[1]))) {
            return false;
        }
    }
    return true;
}

assert.deepEqual(figureQueenPuzzle(1), [[0, 0]], 'trivial solution');
assert.deepEqual(figureQueenPuzzle(2), null, 'non-exist solution');
assert.deepEqual(figureQueenPuzzle(4), [ [ 0, 1 ], [ 1, 3 ], [ 2, 0 ], [ 3, 2 ] ], 'four queen puzzle');
assert.deepEqual(figureQueenPuzzle(8), [ [ 0, 0 ], [ 1, 4 ], [ 2, 7 ], [ 3, 5 ], [ 4, 2 ], [ 5, 6 ], [ 6, 1 ], [ 7, 3 ] ], 'eight queen puzzle');
