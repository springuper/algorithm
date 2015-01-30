# @return an integer
def trailingZeroes(n):
        count = 0
        division = 5
        while True:
            ret = int(n / division)
            if ret <= 0:
                break;
            count += ret
            division *= 5
        return count


assert trailingZeroes(1) == 0
assert trailingZeroes(5) == 1
assert trailingZeroes(10) == 2
assert trailingZeroes(15) == 3
assert trailingZeroes(20) == 4
assert trailingZeroes(25) == 6
