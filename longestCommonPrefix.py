 # @return a string
def longestCommonPrefix(strs):
    l = len(strs)
    if l == 0:
        return ''
    elif l == 1:
        return strs[0]
    prefix = ''
    a = strs[0]
    b = strs[1]
    lb = len(b)
    for i in range(len(a)):
        if i >= lb or a[i] != b[i]:
            break
        prefix += a[i]
    if prefix == '':
        return ''

    for i in range(2, len(strs)):
        s = strs[i]
        ls = len(s)
        for i in range(len(prefix)):
            if i >= ls or s[i] != prefix[i]:
                prefix = prefix[0:i]
                break

    return prefix

assert longestCommonPrefix([]) == ''
assert longestCommonPrefix(['a', 'b']) == ''
assert longestCommonPrefix(['abc', 'ab']) == 'ab'
assert longestCommonPrefix(['abc', 'abcd', 'abd']) == 'ab'
