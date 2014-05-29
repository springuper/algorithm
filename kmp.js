/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 子串查找之KMP算法
 * @method kmp
 * @param {String} str
 * @param {String} substr
 * @return {Number}
 */
function kmp(str, substr) {
    var table = computeBacktraceTable(substr),
        len = str.length,
        sublen = substr.length,
        i = 0, j = 0;

    while (i < len) {
        for (j = 0; j < sublen; ++j) {
            if (str.charAt(i) === substr.charAt(j)) {
                i++;
                continue;
            }
            if (table[j - 1] > 0) {
                // backtrace
                j = table[j - 1] - 1;
            } else {
                i++;
                break;
            }
        }
        if (j === sublen) {
            return i - sublen;
        }
    }
    return -1;
}

/**
 * 计算回溯表
 * @method computeBacktraceTable
 * @param {String} str
 * @return {Array}
 */
function computeBacktraceTable(str) {
    var table = [0],
        cha,
        previousCha,
        i, len;
    for (i = 1, len = str.length; i < len; ++i) {
        cha = str.charAt(i);
        previousCha = str.charAt(table[i - 1]);
        if (previousCha === cha) {
            table[i] = table[i - 1] + 1;
        } else {
            table[i] = 0;
        }
    }
    return table;
}

assert.deepEqual(computeBacktraceTable('abcdef'), [0, 0, 0, 0, 0, 0], 'no backtrace');
assert.deepEqual(computeBacktraceTable('abcabd'), [0, 0, 0, 1, 2, 0], 'repeat once');
assert.deepEqual(computeBacktraceTable('abcabcabd'), [0, 0, 0, 1, 2, 3, 4, 5, 0], 'repeat twice');
assert.deepEqual(kmp('abcabcabd', 'abcabd'), 3, 'match');
assert.deepEqual(kmp('hellospring', 'spring'), 5, 'match');
assert.deepEqual(kmp('damn', 'spring'), -1, 'no match');
