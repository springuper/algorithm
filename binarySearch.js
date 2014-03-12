var assert = require('assert');

/**
 * 二分查找-左闭右闭型
 * @method binarySearch
 * @param {Array} arr 按升序排列
 * @param {Number} num
 * @return {Number}
 */
function binarySearch(arr, num) {
    var from = 0,
        to = arr.length - 1,
        mid;

    while (from <= to) {
        mid = Math.floor((from + to) / 2);
        if (arr[mid] > num) {
            to = mid - 1;
        } else if (arr[mid] < num) {
            from = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/**
 * 二分查找-左闭右开型
 * @method binarySearchRightOpen
 * @param {Array} arr 按升序排列
 * @param {Number} num
 * @return {Number}
 */
function binarySearchRightOpen(arr, num) {
    var start = 0,
        end = arr.length,
        mid;

    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] > num) {
            end = mid;
        } else if (arr[mid] < num) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

/**
 * 二分查找-重复值取最左角标
 * @method binarySearch
 * @param {Array} arr 按升序排列
 * @param {Number} num
 * @return {Number}
 */
function binarySearchMinimum(arr, num) {
    var from = 0,
        to = arr.length - 1,
        mid;

    while (from <= to) {
        mid = Math.floor((from + to) / 2);
        if (arr[mid] >= num) {
            to = mid - 1;
        } else {
            from = mid + 1;
        }
    }

    if (arr[to + 1] === num) {
        return to + 1;
    }

    return -1;
}

var arr = [1, 2, 3, 4, 5];
var arrDuplicate = [1, 2, 2, 2, 5];
var arrEqual = [2, 2, 2, 2];
assert.deepEqual(binarySearch(arr, 0), -1);
assert.deepEqual(binarySearch(arr, 1), 0);
assert.deepEqual(binarySearch(arr, 2), 1);
assert.deepEqual(binarySearch(arr, 3), 2);
assert.deepEqual(binarySearch(arr, 5), 4);
assert.deepEqual(binarySearch(arr, 15), -1);
assert.deepEqual(binarySearchRightOpen(arr, 0), -1);
assert.deepEqual(binarySearchRightOpen(arr, 1), 0);
assert.deepEqual(binarySearchRightOpen(arr, 2), 1);
assert.deepEqual(binarySearchRightOpen(arr, 3), 2);
assert.deepEqual(binarySearchRightOpen(arr, 5), 4);
assert.deepEqual(binarySearchRightOpen(arr, 15), -1);
assert.deepEqual(binarySearchMinimum(arrDuplicate, 0), -1);
assert.deepEqual(binarySearchMinimum(arrDuplicate, 1), 0);
assert.deepEqual(binarySearchMinimum(arrDuplicate, 2), 1);
assert.deepEqual(binarySearchMinimum(arrDuplicate, 5), 4);
assert.deepEqual(binarySearchMinimum(arrDuplicate, 6), -1);
assert.deepEqual(binarySearchMinimum(arrEqual, 2), 0);
