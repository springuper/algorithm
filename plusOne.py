# @param digits, a list of integer digits
# @return a list of integer digits
def plusOne(digits):
    curry = 1
    i = len(digits) - 1
    while i >= 0:
        digit = digits[i] + curry
        curry = digit / 10
        digits[i] = digit % 10
        if curry < 1:
            break
        i -= 1
    if curry >= 1:
        digits[0] = 0
        digits.insert(0, 1)

    return digits

print plusOne([9, 9])

assert plusOne([0]) == [1]
# assert plusOne([1, 0]) == [1, 1]
# assert plusOne([9, 9]) == [1, 0, 0]
