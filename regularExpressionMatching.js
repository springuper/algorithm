/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    if (s.length === 0) {
        if (p.length >= 2 && p.charAt(1) === '*') {
            return isMatch(s, p.slice(2));
        } else {
            return false;
        }
    }

    var char = s.charAt(0);
    var pFirst = p.charAt(0);
    var pSecond = p.length >= 2 && p.charAt(1);
    var isMatchChar = function (char, pattern) {
        return pattern === '.' ? char !== '' : char === pattern;
    };
    if (pSecond === '*') {
        if (!isMatchChar(char, pFirst)) {
            return isMatch(s, p.slice(2));
        }
        var i = 0;
        while (s.length >= i) {
            if (isMatchChar(s.charAt(i), pFirst)) {
                if (isMatch(s.slice(i), p.slice(2))) return true;
            } else {
                return isMatch(s.slice(i), p.slice(2));
            }
            i++;
        }
        return false;
    } else {
        if (!isMatchChar(char, pFirst)) return false;
        return isMatch(s.slice(1), p.slice(1));
    }
};


var assert = require('assert');
assert(!isMatch("aa", "a"));
assert(isMatch("aa", "aa"));
assert(isMatch("aa", "a*"));
assert(isMatch("aa", ".*"));
assert(isMatch("ab", ".*"));
assert(isMatch("aab", "c*a*b"));
assert(isMatch("", "c*c*"));
