var assert = require('assert');

/**
 * 快速排序
 * @method quickSort
 * @param {Array} arr
 * @param {Number} [start]
 * @param {Number} [end]
 * @return {Number}
 */
function quickSort(arr, start, end) {
    var index;
    start = typeof start === 'undefined' ? 0 : start;
    end = typeof end === 'undefined' ? arr.length : end;
    if (start >= end) return;

    index = partition(arr, start, end);
    quickSort(arr, start, index);
    quickSort(arr, index + 1, end);

    return arr;
}

/**
 * 分割
 * @method partition
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @return {Number}
 */
function partition(arr, start, end) {
    var i = start, j,
        pivot = arr[start],
        cur, tmp;
    
    for (j = i + 1; j < end; ++j) {
        cur = arr[j];
        if (cur < pivot) {
            i++;
            if (i !== j) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    if (i !== start) {
        arr[start] = arr[i];
        arr[i] = pivot;
    }

    return i;
}

var arrA = [5, 4, 6, 2, 1];
var arrB = [1, 2, 3, 4, 5];
var arrC = [0, 3, 1];
var arrD = [2, 1, 3];
var arrE = [2, 2, 2];
assert.deepEqual(quickSort(arrA), [1, 2, 4, 5, 6]);
assert.deepEqual(quickSort(arrB), [1, 2, 3, 4, 5]);
assert.deepEqual(quickSort(arrC), [0, 1, 3]);
assert.deepEqual(quickSort(arrD), [1, 2, 3]);
assert.deepEqual(quickSort(arrE), [2, 2, 2]);
