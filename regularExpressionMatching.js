// /**
//  * @param {string} s
//  * @param {string} p
//  * @return {boolean}
//  */
// var isMatch = function (s, p) {
//     if (p.length === 0) {
//         return s.length === 0;
//     }
//     if (s.length === 0) {
//         if (p.length >= 2 && p.charAt(1) === '*') {
//             return isMatch(s, p.slice(2));
//         } else {
//             return false;
//         }
//     }
// 
//     var char = s.charAt(0);
//     var pFirst = p.charAt(0);
//     var pSecond = p.length >= 2 && p.charAt(1);
//     var isMatchChar = function (char, pattern) {
//         return pattern === '.' ? char !== '' : char === pattern;
//     };
//     if (pSecond === '*') {
//         if (!isMatchChar(char, pFirst)) {
//             return isMatch(s, p.slice(2));
//         }
//         var i = 0;
//         while (s.length >= i) {
//             if (isMatchChar(s.charAt(i), pFirst)) {
//                 if (isMatch(s.slice(i), p.slice(2))) return true;
//             } else {
//                 return isMatch(s.slice(i), p.slice(2));
//             }
//             i++;
//         }
//         return false;
//     } else {
//         if (!isMatchChar(char, pFirst)) return false;
//         return isMatch(s.slice(1), p.slice(1));
//     }
// };

/**
 * DP approach
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    var matrix = [];
    var m = s.length, n = p.length;
    var i, j;

    for (i = 0; i <= m; ++i) {
        matrix.push(new Array(n + 1));
        for (j = 0; j <= n; ++j) {
            if (j === 0) {
                matrix[i][0] = i === 0;
            } else if (i === 0) {
                matrix[i][j] = j > 1 && p.charAt(j - 1) === '*' && (matrix[i][j - 1] || matrix[i][j - 2]);
            } else {
                // 字符匹配
                if (s.charAt(i - 1) === p.charAt(j - 1) || '.' === p.charAt(j - 1)) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                } else if (p.charAt(j - 1) === '*' && j > 1) {
                    // 忽略当前字符组时匹配
                    if (matrix[i][j - 2]) {
                        matrix[i][j] = true;
                    // 重复前一个匹配的字符时匹配
                    } else if ((s.charAt(i - 1) === p.charAt(j - 2) || '.' === p.charAt(j - 2)) && matrix[i - 1][j]) {
                        matrix[i][j] = true;
                    }
                }
            }
        }
    }

    return !!matrix[m][n];
};


var assert = require('assert');
assert(!isMatch("aa", "a"));
assert(isMatch("aa", "aa"));
assert(isMatch("aa", "a*"));
assert(isMatch("aa", ".*"));
assert(isMatch("ab", ".*"));
assert(isMatch("aab", "c*a*b"));
assert(isMatch("", "c*c*"));
