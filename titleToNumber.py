 # @param s, a string
# @return an integer
def titleToNumber(s):
    ret = 0
    for i in s:
        ret = ret * 26 + ord(i) - ord('A') + 1
    return ret

assert titleToNumber('A') == 1
assert titleToNumber('Z') == 26
assert titleToNumber('AA') == 27
assert titleToNumber('AB') == 28
