# @return an integer
def atoi(s):
    n = 0
    sign = 1
    prev = ''
    for i in s:
        if prev == '' or prev == ' ':
            if i == '+':
                sign = 1
            elif i == '-':
                sign = -1
            elif i >= '0' and i <= '9':
                n = n * 10 + ord(i) - ord('0')
            elif i != ' ':
                return 0
        elif prev == '+' or prev == '-' or (prev >= '0' and prev <= '9'):
            if i < '0' or i > '9':
                break;
            n = n * 10 + ord(i) - ord('0')
            if n * sign > 2147483647:
                return 2147483647
            elif n * sign < -2147483648:
                return -2147483648
        prev = i
    return n * sign


assert atoi('123') == 123
assert atoi('-123') == -123
assert atoi('0123') == 123
assert atoi('-0123') == -123
assert atoi(' 123') == 123
assert atoi(' -123') == -123
assert atoi(' 123abc') == 123
assert atoi('2147483648') == 2147483647
assert atoi('-2147483649') == -2147483648
assert atoi('+-123') == 0
assert atoi('- 123') == 0
assert atoi('   +0 123') == 0
