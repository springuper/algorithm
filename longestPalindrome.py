# @return a string
# DP approach, O(n^2)
def longestPalindrome(s):
    l = len(s)
    maxStr = s[0]
    maxLen = 1

    p = [[0 for i in range(l)] for j in range(l)]
    for i in range(l - 1):
        p[i][i] = 1
        if s[i] == s[i + 1]:
            if maxLen < 2:
                maxLen = 2
                maxStr = s[i:(i + 2)]
            p[i][i + 1] = 1
        else:
            p[i][i + 1] = 0

    for k in range(2, l):
        for i in range(0, l - k):
            j = i + k
            if p[i + 1][j - 1] and s[i] == s[j]:
                p[i][j] = 1
                if maxLen < (j - i + 1):
                    maxLen = j - i + 1
                    maxStr = s[i:(j + 1)]
            else:
                p[i][j] = 0

    return maxStr

# O(n)
def longestPalindromeSubstring(s):
    def preProcess(s):
        if len(s) == 0:
            return ''
        ret = '^'
        for c in s:
            ret += '#' + c
        return ret + '#$'

    T = preProcess(s)
    n = len(T)
    C = 0
    R = 0
    P = [0 for i in range(n)]
    for i in range(1, n - 1):
        iMirror = C - (i - C)
        P[i] = max(min(R - i, P[iMirror]), 0)

        while T[i - P[i] - 1] == T[i + P[i] + 1]:
            P[i] += 1

        if P[i] + i > R:
            R = P[i] + i
            C = i

    maxLen = 0
    centerIndex = 0
    for i in range(1, n - 1):
        if P[i] > maxLen:
            maxLen = P[i]
            centerIndex = i

    start = (centerIndex - 1 - maxLen) / 2
    return s[start:(start + maxLen)];

assert longestPalindromeSubstring('helloworld') == 'owo'
assert longestPalindromeSubstring('abbc') == 'bb'
assert longestPalindromeSubstring('spring') == 's'
