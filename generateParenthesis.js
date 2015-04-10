'use strict';

/**
 * @param {number} n
 * @returns {string[]}
 */
var generateParenthesis = function (n) {
    var list = [];
    var generate = function (open, close, str) {
        if (open > close) return;
        if (open == 0 && close == 1) {
            list.push(str + ')');
            return;
        }
        if (open > 0) {
            generate(open - 1, close, str + '(');
        }
        if (close > 0) {
            generate(open, close - 1, str + ')');
        }

    };
    generate(n - 1, n, '(');
    return list;
};

var assert = require('assert');
assert.deepEqual(generateParenthesis(3), [
    "((()))",
    "(()())",
    "(())()",
    "()(())",
    "()()()"
]);
