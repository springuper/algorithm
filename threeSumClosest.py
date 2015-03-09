# @return a list of lists of length 3, [[val1,val2,val3]]
def threeSumClosest(num, target):
        ret = []
        num.sort()
        size = len(num)
        if size < 3:
            return None
        closest = [num[0], num[1], num[-1]]
        sumClosest = num[0] + num[1] + num[-1]
        for i in range(size):
            l = i + 1
            r = size - 1
            while l < r:
                s = num[i] + num[l] + num[r]
                if s == target:
                    return target
                if abs(sumClosest - target) > abs(s- target):
                    closest = [num[i], num[l], num[r]]
                    sumClosest = s
                if s < target:
                    l += 1
                else:
                    r -= 1

        return sumClosest

assert threeSumClosest([-1, 1, 2, -4], 1) == 2
assert threeSumClosest([0, 1, 2], 3) == 3
assert threeSumClosest([], 3) == None
