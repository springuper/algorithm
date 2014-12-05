# @return an boolean
def isPalindrome(x):
    if x < 0:
        return False
    if x < 10:
        return True

    # count digits
    count = 0
    xx = x
    while xx > 0:
        xx = xx / 10
        count += 1

    i = 0
    while i < count - 1:
        if ((x % (10 ** (i + 1))) / (10 ** i)) != ((x % (10 ** count)) / (10 ** (count - 1))):
            return False
        i += 1
        count -= 1
    return True


assert isPalindrome(121) == True
assert isPalindrome(12321) == True
assert isPalindrome(123) == False
assert isPalindrome(1) == True
assert isPalindrome(-1) == False
