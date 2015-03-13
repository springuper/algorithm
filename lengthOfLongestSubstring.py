def lengthOfLongestSubstring(s):
    i = j = 0
    l = len(s)
    maxLen = 0
    exist = {}
    while j < l:
        if s[j] in exist and exist[s[j]]:
            maxLen = max(maxLen, j - i)
            while s[i] != s[j]:
                exist[s[i]] = False
                i += 1
            i += 1
            j += 1
        else:
            exist[s[j]] = True
            j += 1
    return max(maxLen, l - i)


assert lengthOfLongestSubstring("abcabcbb") == 3
assert lengthOfLongestSubstring("bbb") == 1
assert lengthOfLongestSubstring("tmmzuxt") == 5
