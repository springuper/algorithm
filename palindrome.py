# @param s, a string
# @return a boolean
def isPalindrome(s):
    head = 0
    tail = len(s) - 1
    validChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
    while head < tail:
        if s[head] not in validChars:
            head += 1
            continue
        tailCode = ord(s[tail])
        if s[tail] not in validChars:
            tail -= 1
            continue
        if s[head].lower() == s[tail].lower():
            head += 1
            tail -= 1
        else:
            return False
    return True


assert isPalindrome("A man, a plan, a canal: Panama") == True
assert isPalindrome("race a car") == False
assert isPalindrome("1a2") == False
