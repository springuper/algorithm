/*jshint node:true, white:true*/
var assert = require('assert');

/**
 * 最长回文，线性复杂度
 * @link http://leetcode.com/2011/11/longest-palindromic-substring-part-ii.html
 * @method longestPalindrome
 * @param {String} s
 * @return {String}
 */
function longestPalindrome(s) {
    var T = preProcess(s),
        len = T.length,
        P = [],
        C = 0,
        R = 0,
        i,
        iMirror,
        maxLen = 0,
        centerIndex = 0;

    for (i = 1; i < len - 1; ++i) {
        iMirror = 2 * C - i; // equals to i' = C - (i-C)

        P[i] = (R > i) ? Math.min(R - i, P[iMirror]) : 0;
        
        // Attempt to expand palindrome centered at i
        while (T[i + 1 + P[i]] == T[i - 1 - P[i]]) {
            P[i]++;
        }
    
        // If palindrome centered at i expand past R,
        // adjust center based on expanded palindrome.
        if (i + P[i] > R) {
            C = i;
            R = i + P[i];
        }
    }
 
    // Find the maximum element in P.
    for (i = 1; i < len - 1; ++i) {
        if (P[i] > maxLen) {
            maxLen = P[i];
            centerIndex = i;
        }
    }
    
    return s.substr((centerIndex - 1 - maxLen) / 2, maxLen);
}

/**
 * Transform S into T.
 * For example, S = "abba", T = "^#a#b#b#a#$".
 * ^ and $ signs are sentinels appended to each end to avoid bounds checking
 * @method preProcess
 * @param {String} s
 * @return {String}
 */
function preProcess(s) {
    var len = s.length,
        i,
        ret;
    if (len === 0) return "^$";

    ret = "^";
    for (i = 0; i < len; ++i) {
        ret += "#" + s.substr(i, 1);
    }
    ret += "#$";
    return ret;
}
 
assert.equal(longestPalindrome(''), '', 'empty');
assert.equal(longestPalindrome('abcd'), 'a', 'trivial solution');
assert.equal(longestPalindrome('aba'), 'aba', 'full palindromic');
assert.equal(longestPalindrome('abac'), 'aba', 'part palindromic');
assert.equal(longestPalindrome('caba'), 'aba', 'part palindromic');
assert.equal(longestPalindrome('babcbabcbaccba'), 'abcbabcba', 'part palindromic');
