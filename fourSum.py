# @return a list of lists of length 4, [[val1,val2,val3,val4]]
def fourSum(num, target):
    ret = []
    num.sort()
    size = len(num)
    for i in range(size - 3):
        for j in range(i + 1, size - 2):
            l = j + 1
            r = size - 1
            while l < r:
                s = num[i] + num[l] + num[r]
                if s + num[j] == target:
                    ret.append([num[i], num[j], num[l], num[r]])
                    l += 1
                    r -= 1
                elif s + num[j] < target:
                    l += 1
                else:
                    r -= 1

    n = []
    count = len(ret)
    for i in range(count):
        flag = True
        for j in range(i + 1, count):
            if ret[i] == ret[j]:
                flag = False
                break
        if flag:
            n.append(ret[i])

    return n

assert fourSum([1, 0, -1, 0, -2, 2], 0) == [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
assert fourSum([-1, 1, -1, 1, 1], 0) == [[-1, -1, 1, 1]]
assert fourSum([], 0) == []
