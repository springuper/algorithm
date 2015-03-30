# @return a boolean
def isValid(s):
    stack = []
    l = 0
    if len(s) % 2 == 1:
        return False
    for cha in s:
        if cha == '(' or cha == '[' or cha == '{':
            stack.append(cha)
            l += 1
        else:
            if l == 0:
                return False
            if cha == ')' and stack[-1] != '(':
                return False
            elif cha == ']' and stack[-1] != '[':
                return False
            elif cha == '}' and stack[-1] != '{':
                return False
            stack.pop()
            l -= 1
    return l == 0


assert isValid('()') == True
assert isValid('(') == False
assert isValid('()[]{}') == True
assert isValid('([])') == True
assert isValid('([)]') == False
