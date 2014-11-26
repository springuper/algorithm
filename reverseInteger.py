# @return an integer
def reverse(x):
    maxint = 2**31 - 1
    if x > 0:
        sign = 1
    else:
        sign = -1
        x = -x
    r = 0
    while x:
        r = r * 10 + x % 10
        if r > maxint:
            return 0
        x = x / 10
    return r * sign

assert reverse(123) == 321
assert reverse(-123) == -321
assert reverse(0) == 0
assert reverse(-1) == -1
assert reverse(1) == 1
assert reverse(100) == 1
assert reverse(10000000003) == 0
