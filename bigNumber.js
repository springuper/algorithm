/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 大数
 * @class BigNumber
 * @param {Number} num
 */
function BigNumber(num) {
    this.digits = this._serialize(num);
}
BigNumber.prototype._serialize = function (num) {
    var digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digits;
};
BigNumber.prototype.multiply = function (num) {
    var digits = this.digits,
        nums = this._serialize(num),
        i, j, len = digits.length, lenNums = nums.length,
        ret, carry,
        result = [];
    for (i = 0; i < lenNums; ++i) {
        for (j = 0; j < len; ++j) {
            ret = nums[i] * digits[j] + (result[i + j] || 0);
            carry = Math.floor(ret / 10);
            ret = ret % 10;
            result[i + j] = ret;
            if (carry > 0) {
                result[i + j + 1] = carry + (result[i + j + 1] || 0);
            }
        }
    }
    this.digits = result;
    return this;
};
BigNumber.prototype.format = function () {
    return this.digits.reverse().join('');
};

var bigNumber = new BigNumber(1234);
assert.deepEqual(bigNumber.digits, [4, 3, 2, 1], '_serialize failed');
assert.deepEqual(bigNumber.multiply(56).digits, [4, 0, 1, 9, 6], 'multiply failed');
assert.deepEqual(bigNumber.format(), 69104, 'format failed');
