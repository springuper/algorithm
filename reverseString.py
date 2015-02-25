# @param s, a string
# @return a string
def reverseWords(s):
        def reverse(t):
            return t[::-1]

        r = ''
        word = ''
        s = reverse(s) + ' '
        for i in s:
            if i == ' ':
                if word == '':
                    continue
                else:
                    r += reverse(word) + ' '
                    word = ''
            else:
                word += i

        return r[0:-1] if len(r) else ''

assert reverseWords('the sky is blue') == 'blue is sky the'
assert reverseWords(' a b ') == 'b a'
assert reverseWords('a  b') == 'b a'
