
def RomanToArab(romanNumber):
    l = []
    d = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for i in range(len(romanNumber)):
        l.append(d.get(romanNumber[i]))

    def compute(start, end):
        if start >= end:
            return 0
        maximum = 0
        index = -1
        repeat = True
        for i in range(start, end):
            if i > start and repeat:
                if l[i] != l[start]:
                    repeat = False
            if l[i] > maximum:
                maximum = l[i]
                index = i
        if repeat:
            return (end - start) * l[start]
        else:
            return maximum - compute(start, index) + compute(index + 1, end)

    return compute(0, len(l))


assert RomanToArab('I') == 1
assert RomanToArab('III') == 3
assert RomanToArab('VII') == 7
assert RomanToArab('XCVIII') == 98
assert RomanToArab('MDCCCLXXXVIII') == 1888
assert RomanToArab('MDCCCXCIX') == 1899
assert RomanToArab('MMMCMXCIX') == 3999
