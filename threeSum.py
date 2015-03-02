# @return a list of lists of length 3, [[val1,val2,val3]]
def threeSum(num):
        ret = []
        num.sort()
        size = len(num)
        for i in range(size):
            l = i + 1
            r = size - 1
            while l < r:
                s = num[l] + num[r]
                if s + num[i] == 0:
                    a = [num[i], num[l], num[r]]
                    if len(ret) == 0 or ret[-1] != a:
                        ret.append(a)
                    l += 1
                    r -= 1
                elif s + num[i] < 0:
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

assert threeSum([-1, 0, 1, 2, -1, -4]) == [[-1, -1, 2], [-1, 0, 1]]
assert threeSum([-1, -1, 0, 1]) == [[-1, 0, 1]]
assert threeSum([-2, 0, 1, 1, 2]) == [[-2, 0, 2], [-2, 1, 1]]
assert threeSum([0, 0, 0]) == [[0, 0, 0]]
assert threeSum([]) == []
