/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 查找最长公共子序列（longest common subsequence）
 * @link DP(Dynamic Programming) http://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92
 * @method findLCS
 * @param {String} a
 * @param {String} b
 * @return {String}
 */
function findLCS(a, b) {
    var m = a.length,
        n = b.length,
        maxLen = 0,
        maxPos = [-1, -1],
        subseq = '',
        matrix = [],
        i, j, len;

    // 初始化dynamic programming矩阵
    for (i = 0; i <= m; ++i) {
        matrix[i] = new Array(n + 1);
        matrix[i][0] = 0;
    }
    for (j = 1; j <= n; ++j) {
        matrix[0][j] = 0;
    }

    // 更新DP矩阵
    for (i = 1; i <= m; ++i) {
        for (j = 1; j <= n; ++j) {
            if (a.charAt(i - 1) === b.charAt(j - 1)) {
                len = matrix[i][j] = matrix[i - 1][j - 1] + 1;
                if (len > maxLen) {
                    maxLen = len;
                    maxPos = [i, j];
                }
            } else {
                matrix[i][j] = 0;
            }
        }
    }

    // 计算最长子序列
    if (maxLen > 0) {
        i = maxPos[0];
        j = maxPos[1];
        subseq = a.substring(i - matrix[i][j], i);
    }

    return subseq;
}

assert.deepEqual(findLCS('lang', 'hang'), 'ang', 'suffix failed');
assert.deepEqual(findLCS('angle', 'angery'), 'ang', 'prefix failed');
assert.deepEqual(findLCS('language', 'hang'), 'ang', 'misc failed');
assert.deepEqual(findLCS('angery', 'hang'), 'ang', 'misc failed');
assert.deepEqual(findLCS('angery', 'perfect'), 'er', 'misc failed');
assert.deepEqual(findLCS('angery', 'hill'), '', 'no common failed');
